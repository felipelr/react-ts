import React from "react";
import ClientOrders from "../../components/ClientOrders";
import PageDescription from "../../components/shared/PageDescription";
import PageTitle from "../../components/shared/PageTitle";
import useAppSelector from "../../hooks/useAppSelector";
import strings from "./strings";
import { ProfessionalHomeContainer } from "./styles";

export interface ProfessionalHomePageProps { }

const ProfessionalHomePage: React.FC<ProfessionalHomePageProps> = (props) => {
    const { professional } = useAppSelector(state => state.professinal)
    const { user } = useAppSelector(state => state.auth);

    return (
        <ProfessionalHomeContainer>
            <PageTitle>{strings.title}</PageTitle>
            {user && <ClientOrders />}
        </ProfessionalHomeContainer>
    )
}

export default ProfessionalHomePage;