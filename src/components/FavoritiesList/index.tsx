import React from "react";
import { List } from "@mui/material";
import ProfessionalListItem from "../../components/ProfessionalListItem";
import { Professional } from "../../slices/professionalSlice";
import useFetch from "../../hooks/useFetch";
import { FavoriteProfessionals } from "./styles";
import strings from "./strings";

export interface FavoritiesListProps {
    user: {
        id: number;
    };
 }

interface FavoritiesResult {
    professionals: Professional[];
}

const FavoritiesList: React.FC<FavoritiesListProps> = ({user}) => {
    const [favorities] = useFetch<FavoritiesResult>(`/v1/professionals/favorities/${user.id}`)

    return (
        <>
            {favorities && <FavoriteProfessionals>{strings.favoriteProfessionals}</FavoriteProfessionals>}
            <List>
                {favorities && favorities.professionals.map((item) => {
                    return (
                        <ProfessionalListItem key={item.id} details={item} />
                    )
                })}
            </List>
        </>
    )
}

export default FavoritiesList;