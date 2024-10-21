import styled from "styled-components";

interface Props {
  text: string;
  className?: string;
  onClick: () => void;
}

const Button = ({ text, className, onClick }: Props) => {
  return (
    <Container onClick={onClick} className={className}>
      {text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  ${({ theme }) => theme.fontStyles.text};
  background: ${({ theme }) => theme.colors.general.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.general.white};
  color: ${({ theme }) => theme.colors.general.white};
  border-radius: 10px;
  padding: min(1vw, 1vh) min(2vw, 2vh);
  cursor: pointer;
`;
