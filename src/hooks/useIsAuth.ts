import { useEffect, useState } from "react";
import axiosApi from "../services/axiosApi";
import { setAuthentication } from "../slices/authSlice";
import { Client, setClient } from "../slices/clientSlice";
import { Professional, setProfessional } from "../slices/professionalSlice";
import useAppSelector from "./useAppSelector";
import useAppDispatch from "./useAppDispatch";

interface UserGet {
    id: number;
    email: string;
    role: string;
    client?: Client;
    professional?: Professional;
}

export const useIsAuth = (token: string | null) => {
    const { isAuth } = useAppSelector(state => state.auth)
    const [isAuthToken, setIsAuthToken] = useState(() => token !== null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuth && token) {
            setIsAuthToken(true);
        }
        else {
            validateToken();
        }
    }, [isAuth, token])

    const validateToken = async () => {
        if (token) {
            try {
                const { data } = await axiosApi.get<UserGet>("/v1/users/validateToken", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                dispatch(setAuthentication({ isAuth: true, token: token, user: { id: data.id, email: data.email } }))

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