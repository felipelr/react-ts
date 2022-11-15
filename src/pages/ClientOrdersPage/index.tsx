import { Container, LinearProgress } from "@mui/material";
import React from "react";
import ClientOrdersList from "../../components/ClientOrdersList";
import PageDescription from "../../components/shared/PageDescription";
import PageTitle from "../../components/shared/PageTitle";
import { useClientServiceOrderByClient } from "../../hooks/clientServiceOrder/useClientServiceOrderByClient";
import useAppSelector from "../../hooks/useAppSelector";
import strings from "./strings";

export interface ClientOrdersPageProps { }

const ClientOrdersPage: React.FC<ClientOrdersPageProps> = (props) => {
    const { client } = useAppSelector(state => state.client);
    const { clientOrders, loading } = useClientServiceOrderByClient(client?.id)

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

export default ClientOrdersPage;