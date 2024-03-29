import { Container } from "@mui/material";
import React from "react";
import PageDescription from "../../components/shared/PageDescription";
import PageTitle from "../../components/shared/PageTitle";
import useAppSelector from "../../hooks/useAppSelector";
import strings from "./strings";

export interface ProfessionalHomePageProps { }

const ProfessionalHomePage: React.FC<ProfessionalHomePageProps> = (props) => {
    const { professional } = useAppSelector(state => state.professinal)

    return (
        <Container maxWidth='lg'>
            <PageTitle>{strings.title}</PageTitle>
            <PageDescription>{strings.description}</PageDescription>
        </Container>
    )
}

export default ProfessionalHomePage;