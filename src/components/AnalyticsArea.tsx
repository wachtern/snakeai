import styled from "styled-components";
import useBoundStore from "../stores/BoundStore";
import { useEffect } from "react";

const AnalyticsArea = () => {
  const stepsRemaining = useBoundStore((state) => state.stepsRemaining);
  const generation = useBoundStore((state) => state.generation);
  const individual = useBoundStore((state) => state.individual);
  const individualsPerGen = useBoundStore((state) => state.individualsPerGen);
  const score = useBoundStore((state) => state.score);
  const highscore = useBoundStore((state) => state.highscore);
  const fitness = useBoundStore((state) => state.fitness);
  const highestFitness = useBoundStore((state) => state.highestFitness);
  const timePassed = useBoundStore((state) => state.timePassed);

  const setTimePassed = useBoundStore((state) => state.setTimePassed);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(timePassed + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timePassed]);

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return hours > 0
      ? `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`;
  };

  return (
    <Container>
      <Title>SnakeAI</Title>
      <Analytics>
        <Column>
          <TextWrapper>
            <SubTitle>Generation</SubTitle>
            <Text>{generation}</Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Fitness</SubTitle>
            <Text>{fitness}</Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Score</SubTitle>
            <Text>{score}</Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Steps Remaining</SubTitle>
            <Text>{stepsRemaining}</Text>
          </TextWrapper>
        </Column>
        <Column>
          <TextWrapper>
            <SubTitle>Individual</SubTitle>
            <Text>
              {individual}/{individualsPerGen}
            </Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Highest Fitness</SubTitle>
            <Text>{highestFitness}</Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Highscore</SubTitle>
            <Text>{highscore}</Text>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>Time Passed</SubTitle>
            <Text>{formatTime(timePassed)}</Text>
          </TextWrapper>
        </Column>
      </Analytics>
    </Container>
  );
};

export default AnalyticsArea;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  color: ${({ theme }) => theme.colors.general.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

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

const Analytics = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
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
