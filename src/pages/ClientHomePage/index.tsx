import React from "react";
import { List } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import { ClientHomeContainer, Welcome, Title, FavoriteProfessionals } from "./styles";
import strings from "./strings";
import CardActions from "../../components/CardActions";
import ProfessionalListItem from "../../components/ProfessionalListItem";

export interface ClientHomePageProps { }

const favorities = [{ name: 'Felipe', id: "teste1" }, { name: 'Rodrigo', id: "teste2" }, { name: 'Carlos', id: "teste3" }]

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { client } = useAppSelector(state => state.client)

    const handleClickHireStraber = () => {
        console.log('teste');
    }

    return (
        <ClientHomeContainer>
            <Welcome>{strings.welcome}</Welcome>
            <Title>{strings.title}</Title>
            <CardActions title={strings.cardTitle} description={strings.cardDesc} onClick={handleClickHireStraber} />
            {favorities.length > 0 && <FavoriteProfessionals>{strings.favoriteProfessionals}</FavoriteProfessionals>}
            <List>
            {favorities.map((item) => {
                return (
                    <ProfessionalListItem />
                )
            })}
            </List>
        </ClientHomeContainer>
    )
}

export default ClientHomePage;