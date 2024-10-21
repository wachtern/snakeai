import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  defaultValue: number;
  min?: number;
  max?: number;
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

  return (
    <Container>
      <Button onClick={() => changeValue(-1)}>{`<`}</Button>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Button onClick={() => changeValue(1)}>{`>`}</Button>
    </Container>
  );
};

export default InputNumber;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.general.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.general.inputBorder};
  color: ${({ theme }) => theme.colors.general.white};
  cursor: pointer;
`;

const Input = styled.input`
  ${({ theme }) => theme.fontStyles.text};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.general.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.general.inputBorder};
  color: ${({ theme }) => theme.colors.general.white};
`;
