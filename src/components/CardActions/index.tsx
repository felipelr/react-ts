import React from "react";
import { Card } from "@mui/material";
import { CardTitle, CardDesc, CardContentYellow, CardCenterContainer } from "./styles";
import assets from "./assets";

export interface CardActionsProps {
    title: string;
    description: string;
    onClick: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({ title, description, onClick }) => {
    return (
        <Card>
            <CardContentYellow onClick={onClick}>
                <CardTitle>{title}</CardTitle>
                <CardCenterContainer>
                    <img
                        src={`${assets.client}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${assets.client}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="Client"
                        loading="lazy" />
                    <CardDesc>{description}</CardDesc>
                </CardCenterContainer>
            </CardContentYellow>
        </Card>
    )
}

export default CardActions;