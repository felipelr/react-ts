import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Divider } from "@mui/material";
import React from "react";
import { ItemTitle, ItemDescription } from "./styles";

export interface ProfessionalListItemProps { }

const ProfessionalListItem: React.FC<ProfessionalListItemProps> = (props) => {

    const handleItemClick = () => {
        console.log('item clicked');
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemButton onClick={handleItemClick}>
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://source.unsplash.com/user/c_v_r/100x100" />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <ItemTitle>
                                Rodrigo Silva
                            </ItemTitle>
                        }
                        secondary={
                            <ItemDescription>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error id tenetur reprehenderit, repellat earum totam in ex ipsa. Pariatur nemo ea blanditiis quisquam exercitationem corrupti itaque reiciendis dicta voluptate eaque!
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