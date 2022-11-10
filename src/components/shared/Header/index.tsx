import React, { useState } from "react";
import { StrabLogo, ButtonNeutral, UserInfo, ButtonLink } from "./styles";
import assets from "./assets";
import strings from "./strings";
import { useNavigate, useLocation } from "react-router-dom";
import useAppSelector from "../../../hooks/useAppSelector";
import LogoutIcon from '@mui/icons-material/Logout';
import useAppDispatch from "../../../hooks/useAppDispatch";
import { logout, setUserType } from "../../../slices/authSlice";
import { useCookies } from "react-cookie";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export interface HeaderProps { }

const Header: React.FC<HeaderProps> = (props) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
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

    const goToClientHome = () => {
        navigate("/client");
    }

    const goToProfessionalHome = () => {
        navigate("/professional");
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const isClient = userType === 'client';
    const pages = isClient ?
        [
            {
                name: strings.findProfessional,
                onClick: goToClientHome
            },
        ] :
        [
            {
                name: strings.clientOrders,
                onClick: goToProfessionalHome
            },
        ];

    return (
        <AppBar position="static">
            <Toolbar>
                {/*MOSTRA QUANDO A TELA FOR PEQUENA */}
                <Box sx={{ alignItems: 'center', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <StrabLogo src={assets.strab_branco} alt="Logo" onClick={handleGotoHome} />
                    <UserInfo>Bem vindo</UserInfo>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={page.onClick}>
                                <Typography textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/*MOSTRA QUANDO A TELA FOR GRANDE */}
                <Box sx={{ alignItems: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                    <StrabLogo src={assets.strab_branco} alt="Logo" onClick={handleGotoHome} />
                    <UserInfo>Bem vindo</UserInfo>
                    {pages.map((page) => (
                        <ButtonNeutral
                            key={page.name}
                            onClick={page.onClick}
                        >
                            {page.name}
                        </ButtonNeutral>
                    ))}
                </Box>

                {(client && professional) &&
                        <ButtonNeutral onClick={handleChangeUserType}>
                            {isClient ? strings.changeToProfessional : strings.changeToClient}
                        </ButtonNeutral>
                    }
                <ButtonLink onClick={handleLogout}>
                    <LogoutIcon />
                    {strings.logout}
                </ButtonLink>
            </Toolbar>
        </AppBar>
    )
}

export default Header;