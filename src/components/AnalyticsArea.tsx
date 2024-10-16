import styled from "styled-components";

const AnalyticsArea = () => {
  return <Container></Container>;
};

export default AnalyticsArea;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.general.background};
  background: red;

  @media (min-aspect-ratio: 1/1) {
    height: 100%;
    width: 100%;
    max-width: calc(80vw - 70vh);
  }

  @media (max-aspect-ratio: 1/1) {
    width: 100%;
    height: 100%;
    max-height: calc(80vh - 70vw);
  }
`;
