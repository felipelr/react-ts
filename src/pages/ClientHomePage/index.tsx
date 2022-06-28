import React from "react";
import useAppSelector from "../../hooks/useAppSelector";

export interface ClientHomePageProps { }

const ClientHomePage: React.FC<ClientHomePageProps> = (props) => {
    const { client } = useAppSelector(state => state.client)

    return (
        <div>
            <h1>Client Home</h1>
            <p>{`${client?.name} - ${client?.document}`}</p>
        </div>
    )
}

export default ClientHomePage;