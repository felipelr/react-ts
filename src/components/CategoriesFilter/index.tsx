import React from "react";
import { CategoriesFilterContainer, InputContainer, InputInfo, InputSearch, IconSearch } from "./styles";
import strings from "./strings";
import { useCategoriesContext } from "../../contexts/CategoriesContext";

export interface CategoriesFilterProps { }

const CategoriesFilter: React.FC<CategoriesFilterProps> = (props) => {
    const categoriesContext = useCategoriesContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        categoriesContext.updateFilter(event.target.value);
    }

    return (
        <CategoriesFilterContainer>
        <InputContainer>
            <IconSearch />
            <InputSearch  label={strings.placeholder} onChange={handleChange}/>
        </InputContainer>
        <InputInfo>{strings.inputInfo}</InputInfo>
        </CategoriesFilterContainer>
    )
}

export default CategoriesFilter;