import { useEffect, useState } from "react";
import axiosApi from "../services/axiosApi";
import { setAuthentication } from "../slices/authSlice";
import { Client, setClient } from "../slices/clientSlice";
import { Professional, setProfessional } from "../slices/professionalSlice";
import useAppDispatch from "./useAppDispatch";

interface UserGet {
    id: number;
    email: string;
    role: string;
    client?: Client;
    professional?: Professional;
}

export const useIsAuth = (isAuth: boolean, token: string) => {
    const [isAuthToken, setIsAuthToken] = useState(() => {
        return token ? true : false
    });
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuth && token)
            setIsAuthToken(true);
        else
            validateToken(token);
    }, [isAuth])

    const validateToken = async (token: string) => {
        if (token) {
            try {
                const { data } = await axiosApi.get<UserGet>("/users/validateToken", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                dispatch(setAuthentication({ isAuth: true, token: token, user: { id: data.id, email: data.email, client: data.client, professional: data.professional } }))

                if (data.professional)
                    dispatch(setProfessional(data.professional));

                if (data.client)
                    dispatch(setClient(data.client));

                setIsAuthToken(true);
            }
            catch (err) {
                setIsAuthToken(false);
            }
        }
    }

    return isAuthToken;
}