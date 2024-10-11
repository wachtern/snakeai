import { useState } from "react";
import styled from "styled-components";
import GameField from "../components/GameField";

const Playfield = () => {
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <Container>
      <CustomGameField fieldSize={15} />
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
