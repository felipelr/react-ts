import React from "react";
import CardActions from "../../components/CardActions";
import useAppSelector from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

import { ClientHomeContainer } from "./styles";
import strings from "./strings";
import FavoritiesList from "../../components/FavoritiesList";
import PageTitle from "../../components/PageTitle";
import PageDescription from "../../components/PageDescription";

export interface ClientHomePageProps { }

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { user } = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    const handleClickHireStraber = () => {
        navigate("/client/categories");
    }

    return (
        <ClientHomeContainer>
            <PageDescription>{strings.welcome}</PageDescription>
            <PageTitle>{strings.title}</PageTitle>
            <CardActions title={strings.cardTitle} description={strings.cardDesc} onClick={handleClickHireStraber} />
            {user && <FavoritiesList user={user} />}
        </ClientHomeContainer>
    )
}

export default ClientHomePage;