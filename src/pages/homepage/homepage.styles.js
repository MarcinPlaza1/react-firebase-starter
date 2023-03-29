import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  font-size: 24px;
`;
