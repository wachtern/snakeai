import styled from "styled-components";
import GameField from "../components/GameField";
import useBoundStore from "../stores/BoundStore";
import AnalyticsArea from "../components/AnalyticsArea";

const Playfield = () => {
  const fieldSize = useBoundStore((state) => state.fieldSize);

  return (
    <Container>
      <GameField fieldSize={fieldSize >= 5 ? fieldSize : 4} />
      <AnalyticsArea />
    </Container>
  );
};

export default Playfield;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: min(5vw, 5vh);

  @media (min-aspect-ratio: 1/1) {
    flex-direction: row;
    gap: 2.5vw;
  }

  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;
    gap: 2.5vh;
  }
`;
