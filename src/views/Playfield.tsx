import styled from "styled-components";
import GameField from "../components/GameField";
import useBoundStore from "../stores/BoundStore";

const Playfield = () => {
  const fieldSize = useBoundStore((state) => state.fieldSize);

  return (
    <Container>
      <CustomGameField fieldSize={fieldSize >= 5 ? fieldSize : 4} />
    </Container>
  );
};

export default Playfield;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomGameField = styled(GameField)`
  width: min(90vw, 90vh);
  height: min(90vw, 90vh);
`;
