import React from "react";
import { CategoriesContainer } from "./styles";
import strings from "./strings";
import PageTitle from "../../components/PageTitle";
import PageDescription from "../../components/PageDescription";
import CategoriesList from "../../components/CategoriesList";

export interface CategoriesPageProps { }

const CategoriesPage: React.FC<CategoriesPageProps> = (props) => {

    return (
        <CategoriesContainer>
            <PageDescription>{strings.description}</PageDescription>
            <PageTitle>{strings.title}</PageTitle>
            <CategoriesList />
        </CategoriesContainer>
    )
}

export default CategoriesPage;