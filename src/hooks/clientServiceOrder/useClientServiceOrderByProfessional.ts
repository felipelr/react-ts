import React, { useState, useEffect } from "react";
import useAppSelector from "../useAppSelector";
import { ClientOrders, clientServiceOrder } from "../../services/ClientOrderService"

export const useClientServiceOrderByProfessional = (professionalId?: number, clientId?: number) => {
    const { token } = useAppSelector(state => state.auth)
    const [clientOrders, setClientOrders] = useState<ClientOrders[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token && professionalId && clientId) {
            clientServiceOrder.getByProfessional(token, professionalId, clientId)
                .then(data => {
                    if (data?.data?.clientsOrders)
                    setClientOrders(data?.data?.clientsOrders)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [clientId, token])

    return { clientOrders, loading };
}