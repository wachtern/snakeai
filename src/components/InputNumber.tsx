import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  defaultValue: number;
  min?: number;
  max?: number;
}

interface ButtonProps {
  isDisabled: boolean;
}

const InputNumber = ({ defaultValue, min, max }: Props) => {
  const [value, setValue] = useState<number>(defaultValue);
  const [inputValue, setInputValue] = useState<string>(defaultValue.toString());

  function changeValue(adjustment: number) {
    setValue((prevValue) => {
      const newValue = prevValue + adjustment;

      if (max !== undefined && newValue > max) {
        setInputValue(max.toString());
        return max;
      }

      if (min !== undefined && newValue < min) {
        setInputValue(min.toString());
        return min;
      }

      setInputValue(newValue.toString());
      return newValue;
    });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  function handleInputBlur() {
    const numericValue = Number(inputValue);
    if (!isNaN(numericValue)) {
      if (max !== undefined && numericValue > max) {
        setValue(max);
        setInputValue(max.toString());
      } else if (min !== undefined && numericValue < min) {
        setValue(min);
        setInputValue(min.toString());
      } else {
        setValue(numericValue);
      }
    } else {
      setInputValue(value.toString());
    }
  }

  const isDecrementDisabled = min !== undefined && value <= min;
  const isIncrementDisabled = max !== undefined && value >= max;

  return (
    <Container>
      <Button
        onClick={() => changeValue(-1)}
        disabled={isDecrementDisabled}
        isDisabled={isDecrementDisabled}
      >
        {`<`}
      </Button>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Button
        onClick={() => changeValue(1)}
        disabled={isIncrementDisabled}
        isDisabled={isIncrementDisabled}
      >
        {`>`}
      </Button>
    </Container>
  );
};

export default InputNumber;

const Container = styled.div`
  display: flex;
  width: min(15vw, 15vh);
  height: min(5vw, 5vh);

  :nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  :nth-child(3) {
    border-radius: 0 10px 10px 0;
  }
`;

const Button = styled.button<ButtonProps>`
  background: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.colors.general.inputDisabled
      : theme.colors.general.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.general.inputBorder};
  color: ${({ theme }) => theme.colors.general.white};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  width: ${(1 / 3) * 100}%;

  &:disabled {
    pointer-events: none;
  }
`;

const Input = styled.input`
  ${({ theme }) => theme.fontStyles.text};
  display: flex;
  width: ${(1 / 3) * 100}%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.general.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.general.inputBorder};
  color: ${({ theme }) => theme.colors.general.white};
`;
