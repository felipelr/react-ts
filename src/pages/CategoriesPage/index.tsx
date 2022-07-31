import React from "react";
import { CategoriesContainer } from "./styles";
import strings from "./strings";
import PageTitle from "../../components/shared/PageTitle";
import PageDescription from "../../components/shared/PageDescription";
import CategoriesList from "../../components/CategoriesList";
import CategoriesFilter from "../../components/CategoriesFilter";
import { CategoriesProvider } from "../../contexts/CategoriesContext";

export interface CategoriesPageProps { }

const CategoriesPage: React.FC<CategoriesPageProps> = (props) => {

    return (
        <CategoriesContainer>
            <PageDescription>{strings.description}</PageDescription>
            <PageTitle>{strings.title}</PageTitle>
            <CategoriesProvider>
                <CategoriesFilter />
                <CategoriesList />
            </CategoriesProvider>
        </CategoriesContainer>
    )
}

export default CategoriesPage;