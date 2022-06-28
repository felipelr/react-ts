import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header";
import { LayoutBody, LayoutContainer } from "./styles";

export interface LayoutProfessionalProps { }

const LayoutProfessional: React.FC<LayoutProfessionalProps> = (props) => {
    return (
        <LayoutContainer>
            <Header />
            <LayoutBody>
                <Outlet />
            </LayoutBody>
        </LayoutContainer>
    )
}

export default LayoutProfessional;