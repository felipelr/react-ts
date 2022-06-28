import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export interface LayoutDefaultProps { }

const LayoutDefault: React.FC<LayoutDefaultProps> = () => {
    return (
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}

export default LayoutDefault;