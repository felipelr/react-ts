import styled from "styled-components";
import { black } from "../../utils/colors";

export const ItemTitle = styled.h1`
    color: ${black};
    font-size: 1em;
    font-weight: normal;
`

export const ItemDescription = styled.span`
    color: ${black};
    font-size: .8em;
    font-weight: normal;
`

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
`