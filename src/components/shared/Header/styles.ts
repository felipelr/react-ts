import styled from "styled-components";
import { strab_blue, white } from "../../../utils/colors";
import { Button } from "@mui/material";

export const HeaderContainer = styled.div`
  background-color: ${strab_blue};
  color: ${white};
  padding: 16px;
  height: 40px;
  display: flex;
`;

export const StrabLogo = styled.img`
  height: 35px;
  :hover{
    cursor: pointer;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`

export const ContainerInfoLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const UserInfo = styled.span`
  color: ${white};
  font-size: 1em;
  margin-right: 16px;
`

export const ButtonLink = styled(Button).attrs((props) => ({
  variant: "text",
  color: "neutral",
  sx: { mt: 2, mb: 2, textDecoration: "underline" },
}))``;


export const ButtonNeutral = styled(Button).attrs((props) => ({
  variant: "text",
  color: "neutral",
  sx: { mt: 2, mb: 2, textDecoration: "none" },
}))``;