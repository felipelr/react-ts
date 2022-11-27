import { Container, LinearProgress } from "@mui/material";
import React from "react";
import ClientOrdersList from "../../components/ClientOrdersList";
import PageDescription from "../../components/shared/PageDescription";
import PageTitle from "../../components/shared/PageTitle";
import { useClientServiceOrderByProfessional } from "../../hooks/clientServiceOrder/useClientServiceOrderByProfessional";
import useAppSelector from "../../hooks/useAppSelector";
import strings from "./strings";

export interface ProfessionalOrdersPageProps { }

const ProfessionalOrdersPage: React.FC<ProfessionalOrdersPageProps> = (props) => {
    const { professional } = useAppSelector(state => state.professinal)
    const { client } = useAppSelector(state => state.client);
    const { clientOrders, loading } = useClientServiceOrderByProfessional(professional?.id, client?.id)

    if (loading) {
        return (
            <LinearProgress color="secondary" />
        )
    }

    return (
        <Container maxWidth='lg'>
            <PageTitle>{strings.title}</PageTitle>
            <PageDescription>{strings.description}</PageDescription>
            <ClientOrdersList clientOrders={clientOrders || []} />
        </Container>
    )
}

export default ProfessionalOrdersPage;