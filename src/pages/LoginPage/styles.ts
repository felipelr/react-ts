import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { light_gray, red, strab_blue } from "../../utils/colors";

const phone = '360px';
const tablet = '768px';
const desktop = '1366px';
const large_desktop = '1920px';

export const LoginContainer = styled.div`
  background: linear-gradient(0deg, ${light_gray} 50%, ${strab_blue} 50%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StrabImg = styled.img`
  height: 70px;
  margin-bottom: 32px;
`;

export const LoginTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 16px;
  font-weight: normal;
  color: ${strab_blue};
`;

export const LoginCenterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${phone}) {
    width: 90vw;
  }

  @media (min-width: ${phone}) and (max-width: ${tablet}) {
    width: 80vw;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 50vw;
  }

  @media (min-width: ${large_desktop}) {
    width: 30vw;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 1em;
  color: ${red};
  text-align: center;
`;

export const ButtonYellow = styled(Button).attrs((props) => ({
  variant: "contained",
  color: "secondary",
  sx: { mt: 4, mb: 2, width: 200 },
}))``;

export const ButtonLink = styled(Button).attrs((props) => ({
  variant: "text",
  color: "primary",
  sx: { mt: 2, mb: 2, width: 400 },
}))``;

export const ButtonLinkUnderline = styled(ButtonLink).attrs((props) => ({
  sx: { textDecoration: "underline", width: 200 },
}))``;

export const InputEmail = styled(TextField).attrs((props) => ({
  variant: "outlined",
  required: true,
  sx: {width: '80%'}
}))``;

export const InputPassword = styled(TextField).attrs((props) => ({
  variant: "outlined",
  type: "password",
  required: true,
  sx: {width: '80%'}
}))``;
