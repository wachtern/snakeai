import { useState } from "react";
import styled from "styled-components";

interface Props {
  fieldSize: number;
  className?: string;
}

const GameField = ({ fieldSize, className }: Props) => {
  const [snake, setSnake] = useState([[1, Math.floor(fieldSize / 2)]]);
  const [food, setFood] = useState([
    Math.floor(fieldSize / 2),
    Math.floor(fieldSize / 2),
  ]);
  const [direction, setDirection] = useState<[number, number]>([1, 0]);

  const generateGrid = () => {
    const grid = new Array(fieldSize * fieldSize).fill(0);

    snake.forEach(([x, y]) => {
      const index = y * fieldSize + x;
      grid[index] = 1;
    });

    const foodIndex = food[1] * fieldSize + food[0];
    grid[foodIndex] = 2;

    return grid;
  };

  const grid = generateGrid();

  return (
    <Container className={className} fieldSize={fieldSize}>
      {grid.map((state, index) => (
        <Field key={index} state={state} fieldSize={fieldSize} />
      ))}
    </Container>
  );
};

export default GameField;

const Container = styled.div<{ fieldSize: number }>`
  min-width: 100px;
  min-height: 100px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.fieldSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.fieldSize}, 1fr);
`;

const Field = styled.div<{ state: number; fieldSize: number }>`
  width: calc(100% / ${(props) => props.fieldSize}px);
  height: calc(100% / ${(props) => props.fieldSize}px);
  border: 1px solid ${({ theme }) => theme.colors.game.border};
  background: ${(props) =>
    props.state == 2
      ? `${props.theme.colors.game.apple}`
      : props.state == 1
      ? `${props.theme.colors.game.snake}`
      : `${props.theme.colors.game.background}`};
`;
