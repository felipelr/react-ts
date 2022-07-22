import React from "react";
import CardActions from "../../components/CardActions";
import useAppSelector from "../../hooks/useAppSelector";

import { ClientHomeContainer, Welcome, Title } from "./styles";
import strings from "./strings";
import FavoritiesList from "../../components/FavoritiesList";

export interface ClientHomePageProps { }

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { user } = useAppSelector(state => state.auth)

    const handleClickHireStraber = () => {
        console.log('teste');
    }

    return (
        <ClientHomeContainer>
            <Welcome>{strings.welcome}</Welcome>
            <Title>{strings.title}</Title>
            <CardActions title={strings.cardTitle} description={strings.cardDesc} onClick={handleClickHireStraber} />
            {user && <FavoritiesList user={user} />}
        </ClientHomeContainer>
    )
}

export default ClientHomePage;