import React, { useEffect, useState } from "react";
import { List } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import CardActions from "../../components/CardActions";
import ProfessionalListItem from "../../components/ProfessionalListItem";
import { Professional } from "../../slices/professionalSlice";
import axiosApi from "../../services/axiosApi";
import useFetch from "../../hooks/useFetch";

import { ClientHomeContainer, Welcome, Title, FavoriteProfessionals } from "./styles";
import strings from "./strings";

export interface ClientHomePageProps { }

interface FavoritiesResult {
    professionals: Professional[];
}

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { user } = useAppSelector(state => state.auth)
    const [favorities] = useFetch<FavoritiesResult>(`/v1/professionals/favorities/${user?.id}`)

    useEffect(() => {

    }, [])

    const handleClickHireStraber = () => {
        console.log('teste');
    }

    return (
        <ClientHomeContainer>
            <Welcome>{strings.welcome}</Welcome>
            <Title>{strings.title}</Title>
            <CardActions title={strings.cardTitle} description={strings.cardDesc} onClick={handleClickHireStraber} />
            {favorities && <FavoriteProfessionals>{strings.favoriteProfessionals}</FavoriteProfessionals>}
            <List>
                {favorities && favorities.professionals.map((item) => {
                    return (
                        <ProfessionalListItem key={item.id} details={item}/>
                    )
                })}
            </List>
        </ClientHomeContainer>
    )
}

export default ClientHomePage;