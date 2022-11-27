import React from "react";
import { List, Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Divider, LinearProgress } from "@mui/material";
import { ItemDescription, ItemTitle, ItemInfo } from "./styles";
import strings from "./strings";
import { ClientOrders } from "../../services/ClientOrderService";

export interface ClientOrdersProps { 
    clientOrders: ClientOrders[]
}

const ClientOrdersList: React.FC<ClientOrdersProps> = ({clientOrders}) => {

    return (
        <List>
                {clientOrders?.map(item => {
                    const parts = Math.floor((item.quantity > 0 ? (100 / item.quantity) : 0));
                    const progressValue = parts * item.quantity_professionals;

                    return (
                        <div key={item.id}>
                            <ListItem alignItems="flex-start">
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar alt={item.client.name} src={item.client.photo} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <>
                                                <ItemTitle>
                                                    {item.client.name}
                                                </ItemTitle>
                                                <br />
                                                <ItemDescription>
                                                    {item.service?.title}
                                                </ItemDescription>
                                            </>
                                        }
                                        secondary={
                                            <>
                                                <ItemDescription>
                                                    {item.description}
                                                </ItemDescription>
                                                <br />
                                                <ItemInfo>
                                                    {strings.quantityReceived} {item.quantity_professionals}/{item.quantity}
                                                </ItemInfo>
                                                <LinearProgress variant="determinate" value={progressValue} />
                                            </>
                                        }
                                        secondaryTypographyProps={{ padding: '8px' }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    )
                })}
            </List>
    )
}

export default ClientOrdersList;