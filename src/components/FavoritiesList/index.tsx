import React from "react";
import { List } from "@mui/material";
import ProfessionalListItem from "../../components/ProfessionalListItem";
import useFetch from "../../hooks/useFetch";
import { FavoriteProfessionals } from "./styles";
import strings from "./strings";

export interface FavoritiesListProps {
    user: {
        id: number;
    };
 }

 interface Details {
    id: number;
    name: string;
    description: string;
    photo: string;
    rate: string;
    rate_count: string;
 }

interface FavoritiesResult {
    professionals: Details[];
}

const FavoritiesList: React.FC<FavoritiesListProps> = ({user}) => {
    const [favorities] = useFetch<FavoritiesResult>(`/v1/professionals/favorities/${user.id}`)

    return (
        <>
            {favorities && <FavoriteProfessionals>{strings.favoriteProfessionals}</FavoriteProfessionals>}
            <List>
                {favorities && favorities.professionals.map((item) => {
                    return (
                        <ProfessionalListItem key={item.id} details={{
                            ...item, 
                            rate: parseInt(item.rate), 
                            rate_count: parseInt(item.rate_count),
                        }} />
                    )
                })}
            </List>
        </>
    )
}

export default FavoritiesList;