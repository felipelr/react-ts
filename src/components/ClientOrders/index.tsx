import React from "react";
import { List, Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Divider, LinearProgress } from "@mui/material";
import useAppSelector from "../../hooks/useAppSelector";
import useFetch from "../../hooks/useFetch";
import { Client } from "../../slices/clientSlice";
import { ClientOrderContainer, ItemDescription, ItemTitle, ItemInfo } from "./styles";
import strings from "./strings";

export interface ClientOrdersProps { }

interface ClientOrders {
    id: number;
    created: Date;
    client_id: number;
    service_id: number;
    quantity: number;
    quantity_professionals: number;
    description: string;
    status: string;
    client: Client;
    service: {
        id: number;
        subcategory_id: number;
        title: string;
        description: string;
    }
}

interface ClientOrdersResult {
    clientsOrders: ClientOrders[];
}

const ClientOrders: React.FC<ClientOrdersProps> = (props) => {
    const { user } = useAppSelector(state => state.auth);
    const [clientOrders, loadingClientOrders] = useFetch<ClientOrdersResult>(`/clientServiceOrders/user/${user?.id}`);

    if (loadingClientOrders) {
        return (
            <LinearProgress color="secondary" />
        )
    }

    return (
        <List>
                {clientOrders && clientOrders.clientsOrders.map(item => {
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
                                                    {item.service.title}
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

export default ClientOrders;