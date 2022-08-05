import styled from "styled-components";
import { gray, strab_blue, white } from "../../utils/colors";

export const SubcategoryContainer = styled.section`
    border-radius: 2px;
    padding: 16px;
    background-color: ${white};
    min-height: 70px;
    display: flex;
    align-items: center;
    border: 1px solid ${gray};
    :hover {
        cursor: pointer;
        filter: brightness(90%);
        -ms-filter: brightness(90%);
        -webkit-filter: brightness(90%);
    }
`

export const SubcategoryDescription = styled.span`
    color: ${strab_blue};
    font-size: 1.5em;
`