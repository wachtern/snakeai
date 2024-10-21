import styled from "styled-components";
import GameField from "../components/GameField";
import useBoundStore from "../stores/BoundStore";
import AnalyticsArea from "../components/AnalyticsArea";
import gitHubLogo from "../assets/logos/github.png";
import { useState } from "react";
import SettingsArea from "../components/SettingsArea";

const Playfield = () => {
  const [screen, setScreen] = useState<boolean>(false);

  const fieldSize = useBoundStore((state) => state.fieldSize);

  return (
    <Container>
      <GitHubWrapper href="https://github.com/wachtern/snakeai" target="_blank">
        {/* Remove WIP later */}
        View on GitHub <br /> (Work in Progress)
        <GitHub src={gitHubLogo} />
      </GitHubWrapper>
      <GameField fieldSize={fieldSize >= 5 ? fieldSize : 4} />
      {screen ? <AnalyticsArea /> : <SettingsArea />}
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

const GitHubWrapper = styled.a`
  ${({ theme }) => theme.fontStyles.gitHub}
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1vh;
  opacity: 60%;
  cursor: pointer;
  text-decoration: none;

  @media (min-aspect-ratio: 1/1) {
    flex-direction: row;
  }

  @media (max-aspect-ratio: 1/1) {
    flex-direction: column-reverse;
  }

  &:hover {
    opacity: 100%;
  }
`;

const GitHub = styled.img`
  width: min(7.5vw, 7.5vh);
  height: min(7.5vw, 7.5vh);
`;
