import React from "react";
import { HeaderContainer, StrabLogo, ContainerInfo, ContainerInfoLeft, UserInfo, ButtonLink } from "./styles";
import assets from "./assets";
import strings from "./strings";
import { useNavigate, useLocation } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import LogoutIcon from '@mui/icons-material/Logout';
import useAppDispatch from "../../../hooks/useAppDispatch";
import { logout, setUserType } from "../../../slices/authSlice";
import { useCookies } from "react-cookie";

export interface HeaderProps { }

const Header: React.FC<HeaderProps> = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-jwt-token']);
    const { userType } = useAppSelector(state => state.auth);
    const { client } = useAppSelector(state => state.client);
    const { professional } = useAppSelector(state => state.professinal);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    let location = useLocation();

    const handleGotoHome = () => {
        if (location.pathname.includes("/client"))
            navigate("/client");
        else
            navigate("/professional");
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
        removeCookie("cookie-jwt-token");
    }

    const handleChangeUserType = () => {
        const changeTo = userType === 'client' ? 'professional' : 'client';
        dispatch(setUserType(changeTo));
        if (changeTo === 'client')
            navigate("/client");
        else
            navigate("/professional");
    }

    return (
        <HeaderContainer>
            <StrabLogo src={assets.strab_branco} alt="Logo" onClick={handleGotoHome} />
            <ContainerInfoLeft>
            <UserInfo>Bem vindo</UserInfo>
            </ContainerInfoLeft>
                
            <ContainerInfo>
                {(client && professional) &&
                    <ButtonLink onClick={handleChangeUserType}>
                        {userType === 'client' ? strings.clientOrders : strings.findProfessional}
                    </ButtonLink>
                }
                <ButtonLink onClick={handleLogout}>
                    <LogoutIcon />
                    {strings.logout}
                </ButtonLink>
            </ContainerInfo>
        </HeaderContainer>
    )
}

export default Header;