import styled from "styled-components";
import InputNumber from "./InputNumber";
import useBoundStore from "../stores/BoundStore";
import Button from "./Button";

const SettingsArea = () => {
  const fieldSize = useBoundStore((state) => state.fieldSize);
  const setScreen = useBoundStore((state) => state.setScreen);

  return (
    <Container>
      <Title>SnakeAI</Title>
      {/* Remove WIP later */}
      <Text>Work in Progress</Text>
      <Settings>
        <Column>
          <TextWrapper>
            <SubTitle>Fieldsize</SubTitle>
            <InputNumber defaultValue={fieldSize} min={8} max={32} />
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Allowed Steps at start</SubTitle>
            <InputNumber defaultValue={100} min={10} max={999} />
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Neural Network Layer 1 size</SubTitle>
            <InputNumber defaultValue={16} min={5} max={99} />
          </TextWrapper>
        </Column>
        <Column>
          <TextWrapper>
            <SubTitle>Individuals per Generation</SubTitle>
            <InputNumber defaultValue={100} min={5} max={999} />
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Steps added per Apple</SubTitle>
            <InputNumber defaultValue={100} min={5} max={999} />
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Neural Network Layer 2 size</SubTitle>
            <InputNumber defaultValue={16} min={5} max={99} />
          </TextWrapper>
        </Column>
      </Settings>
      <Button text={"Start"} onClick={() => setScreen(true)} />
    </Container>
  );
};

export default SettingsArea;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  color: ${({ theme }) => theme.colors.general.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(5vh, 5vw);

  @media (min-aspect-ratio: 1/1) {
    flex-basis: calc(90vw - 70vh);
    height: 100%;
  }

  @media (max-aspect-ratio: 1/1) {
    flex-basis: calc(90vh - 70vw);
    width: 100%;
    justify-content: start;
  }
`;

const Settings = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: min(5vw, 5vh);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(0.25vw, 0.25vh);
`;

const Column = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: min(5vw, 5vh);
`;

const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.title};
  margin: 0;
  white-space: nowrap;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.subtitle};
  margin: 0;
  white-space: nowrap;
`;

const Text = styled.div`
  ${({ theme }) => theme.fontStyles.text};
  margin: 0;
  text-align: center;
  white-space: nowrap;
`;
