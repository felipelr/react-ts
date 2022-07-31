import styled from "styled-components";
import { black } from "../../utils/colors";
import { TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export const CategoriesFilterContainer = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
`

export const InputInfo = styled.span`
    font-size: 0.7em;
    font-weight: normal;
    color: ${black};
    font-style: italic;
    margin-left: 32px;
    margin-top: 4px;
`

export const InputSearch = styled(TextField).attrs((props) => ({
    type: "search",
    sx: {width: '100%'}
}))``;

export const IconSearch = styled(Search).attrs((props) => ({
    sx: { color: 'action.active', mr: 1, my: 0.5 }
}))``;