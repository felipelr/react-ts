import { Client } from "../slices/clientSlice";
import { ApiService } from "./ApiService";

export interface ClientOrders {
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

export interface ClientOrdersResult {
    clientsOrders: ClientOrders[];
}

class ClientOrderService extends ApiService {
    async getByClient(token: string, clientId: number) {
        return await this.request<ClientOrdersResult>({
            token,
            url: `/v1/clientServiceOrders/getByClient/${clientId}`,
            method: 'GET'
        })
    }
}

export const clientServiceOrder = new ClientOrderService();