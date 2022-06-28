import styled from "styled-components";
import { Button } from "@mui/material";
import { strab_blue, white } from "../../utils/colors";

export const HomeContainer = styled.div`
  background-color: ${strab_blue};
  color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StrabImg = styled.img`
  height: 70px;
  margin-bottom: 32px;
`;

export const CenterImg = styled.img`
  height: 70vh;
  min-width: 20vw;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  flex: 1;
`;

export const ContentTitle = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  max-width: 50vw;

  @media (min-width: 720px) {
    width: 350px;
  }
`;

export const ContentDescription = styled.p`
  font-size: 1em;
  font-weight: normal;
  text-align: center;

  @media (min-width: 720px) {
    width: 350px;
  }
`;

export const ButtonBlue = styled(Button).attrs((props) => ({
  variant: "contained",
  color: "neutral",
  sx: { width: 200 },
}))``;

export const ButtonYellow = styled(Button).attrs((props) => ({
  variant: "contained",
  color: "secondary",
  sx: { mt: 4, mb: 2, width: 200 },
}))``;
