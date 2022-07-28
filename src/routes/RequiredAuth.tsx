import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useIsAuth } from "../hooks/useIsAuth";
import useAppSelector from "../hooks/useAppSelector";
import { useCookies } from "react-cookie";

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-jwt-token']);
    const { isAuth } = useAppSelector(state => state.auth)
    let isAuthToken = useIsAuth(isAuth, cookies['cookie-jwt-token']);
    let location = useLocation();

    if (!isAuthToken) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequiredAuth;