import styled from "styled-components";

const AnalyticsArea = () => {
  return <Container></Container>;
};

export default AnalyticsArea;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  color: ${({ theme }) => theme.colors.general.white};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-aspect-ratio: 1/1) {
    flex-basis: calc(90vw - 70vh);
    height: 100%;
  }

  @media (max-aspect-ratio: 1/1) {
    flex-basis: calc(90vh - 70vw);
    width: 100%;
  }
`;
