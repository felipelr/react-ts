import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useIsAuth } from "../hooks/useIsAuth";
import { getToken } from "../slices/authSlice";

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    let isAuth = useIsAuth(token)
    let location = useLocation();

    console.log('isAuth', isAuth);

    if (!isAuth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequiredAuth;