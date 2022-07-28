import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Divider, Rating } from "@mui/material";
import React from "react";
import { ItemTitle, ItemDescription, ContainerDescription } from "./styles";

export interface ProfessionalListItemProps {
    details: {
        id: number;
        name: string;
        description: string;
        photo: string;
        rate: number;
        rate_count: number;
    }
}

const ProfessionalListItem: React.FC<ProfessionalListItemProps> = ({ details }) => {

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
                            <>
                                <ItemDescription>
                                    {details.description}
                                </ItemDescription>
                                <Rating name="read-only" value={details.rate} size="small" readOnly />
                            </>
                        }
                        secondaryTypographyProps={{style:{display: 'flex', flexDirection: 'column'}}}
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default ProfessionalListItem;