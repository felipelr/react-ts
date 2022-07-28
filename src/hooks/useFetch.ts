import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../services/axiosApi";
import useAppDispatch from "./useAppDispatch";
import useAppSelector from "./useAppSelector";
import useLocalStorage from "./useLocalStorage";
import { useCookies } from "react-cookie";
import { logout } from "../slices/authSlice";

function useFetch<T>(url: string, keyToStore: string = '') {
    const { token } = useAppSelector(state => state.auth)
    const [data, setData] = useState<T | null>(null);
    const { storedValue, setValue } = useLocalStorage<T>(keyToStore);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-jwt-token']);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (keyToStore !== '' && storedValue !== null) {
            setData(storedValue);
        }
        else {
            axiosApi.get<T>(url, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then((axiosResult) => {
                const { data } = axiosResult;
                setData(data);

                if (keyToStore !== '') {
                    setValue(data);
                }
            }).catch((error) => {
                const statusCode = error.response ? error.response.status : null;
                if (statusCode === 401) {
                    dispatch(logout());
                    navigate("/");
                    removeCookie("cookie-jwt-token");
                }
            })
        }
    }, [url]);

    return [data];
};

export default useFetch;