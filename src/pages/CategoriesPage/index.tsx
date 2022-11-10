import React from "react";
import { CategoriesProvider } from "../../contexts/CategoriesContext";
import PageContent from "./PageContent";
import { Container } from "@mui/material";

export interface CategoriesPageProps { }

const CategoriesPage: React.FC<CategoriesPageProps> = (props) => {

    return (
        <Container maxWidth='lg'>
            <CategoriesProvider>
                <PageContent />
            </CategoriesProvider>
        </Container>
    )
}

export default CategoriesPage;