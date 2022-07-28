import React, { PropsWithChildren } from "react";
import { Description } from "./styles";

export interface PageDescriptionProps { }

const PageDescription: React.FC<PropsWithChildren<PageDescriptionProps>> = ({ children }) => {
    return (
        <Description>{children}</Description>
    )
}

export default PageDescription;