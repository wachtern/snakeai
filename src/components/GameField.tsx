import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useBoundStore from "../stores/BoundStore";

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
  const [direction, setDirection] = useState<number>(1);
  const [directionChanged, setDirectionChanged] = useState<boolean>(false);

  const stepsRemaining = useBoundStore((state) => state.stepsRemaining);
  const setStepsRemaining = useBoundStore((state) => state.setStepsRemaining);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!directionChanged) {
        switch (e.key) {
          case "ArrowUp":
            direction !== 2 && setDirection(0);
            setDirectionChanged(true);
            break;
          case "ArrowRight":
            direction !== 3 && setDirection(1);
            setDirectionChanged(true);
            break;
          case "ArrowDown":
            direction !== 0 && setDirection(2);
            setDirectionChanged(true);
            break;
          case "ArrowLeft":
            direction !== 1 && setDirection(3);
            setDirectionChanged(true);
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, directionChanged]);

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

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = [...newSnake[0]];

    switch (direction) {
      case 0:
        head[1] -= 1;
        break;
      case 1:
        head[0] += 1;
        break;
      case 2:
        head[1] += 1;
        break;
      case 3:
        head[0] -= 1;
        break;
    }

    setDirectionChanged(false);
    setStepsRemaining(stepsRemaining - 1);

    if (
      head[0] < 0 ||
      head[0] >= fieldSize ||
      head[1] < 0 ||
      head[1] >= fieldSize ||
      newSnake.some(([x, y]) => x === head[0] && y === head[1])
    ) {
      alert("Game Over!");
      return;
    }

    if (head[0] === food[0] && head[1] === food[1]) {
      generateFood();
    } else {
      newSnake.pop();
    }

    newSnake.unshift(head);

    setSnake(newSnake);
  };

  const generateFood = () => {
    const allCells = [];
    for (let x = 0; x < fieldSize; x++) {
      for (let y = 0; y < fieldSize; y++) {
        allCells.push([x, y]);
      }
    }

    const availableCells = allCells.filter(
      ([x, y]) =>
        !snake.some(([snakeX, snakeY]) => snakeX === x && snakeY === y) &&
        (x !== food[0] || y !== food[1])
    );

    if (availableCells.length === 0) {
      // Add function later
      alert("You've won!");
      return;
    } else {
      const newFoodIndex = Math.floor(Math.random() * availableCells.length);
      setFood(availableCells[newFoodIndex]);
      setStepsRemaining(stepsRemaining + 100);
    }
  };

  useEffect(() => {
    if (directionChanged === true) {
      moveSnake();
    }
  }, [directionChanged]);

  const grid = useMemo(() => generateGrid(), [snake, food]);

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
  width: 100%;
  height: 100%;
  display: grid;
  aspect-ratio: 1/1;
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
