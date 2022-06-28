import React from "react";
import { HeaderContainer, StrabLogo } from "./styles";
import assets from "./assets";

export interface HeaderProps { }

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <HeaderContainer>
            <StrabLogo src={assets.strab_branco} alt="Logo" />
        </HeaderContainer>
    )
}

export default Header;