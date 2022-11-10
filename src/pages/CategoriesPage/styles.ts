import styled from "styled-components";
import { Button } from "@mui/material";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ButtonLink = styled(Button).attrs((props) => ({
  variant: "text",
  color: "primary"
}))``;