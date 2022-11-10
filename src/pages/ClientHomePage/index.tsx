import React from "react";
import CardActions from "../../components/CardActions";
import useAppSelector from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

import strings from "./strings";
import FavoritiesList from "../../components/FavoritiesList";
import PageTitle from "../../components/shared/PageTitle";
import PageDescription from "../../components/shared/PageDescription";
import { Container } from "@mui/material";

export interface ClientHomePageProps { }

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { user } = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const handleClickHireStraber = () => {
        navigate("/client/categories");
    }

    return (
        <Container maxWidth='lg'>
            <PageDescription>{strings.welcome}</PageDescription>
            <PageTitle>{strings.title}</PageTitle>
            <CardActions title={strings.cardTitle} description={strings.cardDesc} onClick={handleClickHireStraber} />
            {user && <FavoritiesList user={user} />}
        </Container>
    )
}

export default ClientHomePage;