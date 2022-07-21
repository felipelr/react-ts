import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Divider } from "@mui/material";
import React from "react";
import { Professional } from "../../slices/professionalSlice";
import { ItemTitle, ItemDescription } from "./styles";

export interface ProfessionalListItemProps { 
    details: Professional;
}

const ProfessionalListItem: React.FC<ProfessionalListItemProps> = ({details}) => {

    console.log('details', details)

    const handleItemClick = () => {
        console.log('item clicked');
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemButton onClick={handleItemClick}>
                    <ListItemAvatar>
                        <Avatar alt={details.name} src={details.photo} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <ItemTitle>
                                {details.name}
                            </ItemTitle>
                        }
                        secondary={
                            <ItemDescription>
                                {details.description}
                            </ItemDescription>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default ProfessionalListItem;