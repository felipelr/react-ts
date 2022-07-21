import styled from "styled-components";
import { CardContent } from "@mui/material";
import { strab_blue, strab_yellow } from "../../utils/colors";

export const CardTitle = styled.h1`
    font-weight: bold;
    font-size: 1.5em;
    color: ${strab_blue};
`
export const CardDesc = styled.p`
    font-size: 1em;
    color: ${strab_blue};
`

export const CardCenterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CardContentYellow = styled(CardContent).attrs((props) => ({
  sx: {  backgroundColor: strab_yellow, ':hover': { cursor: 'pointer' } }
}))``;