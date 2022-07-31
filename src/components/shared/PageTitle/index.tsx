import React, { PropsWithChildren } from "react";
import { Title } from "./styles";

export interface PageTitleProps { }

const PageTitle: React.FC<PropsWithChildren<PageTitleProps>> = ({ children }) => {
    return (
        <Title>{children}</Title>
    )
}

export default PageTitle;