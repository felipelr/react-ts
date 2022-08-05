import React from "react";
import { CategoriesContainer } from "./styles";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import PageContent from "./PageContent";

export interface CategoriesPageProps { }

const CategoriesPage: React.FC<CategoriesPageProps> = (props) => {

    return (
        <CategoriesContainer>
            <CategoriesProvider>
                <PageContent />
            </CategoriesProvider>
        </CategoriesContainer>
    )
}

export default CategoriesPage;