import { useState, useEffect } from "react";
import axiosApi from "../services/axiosApi";
import useAppSelector from "./useAppSelector";

function useFetch<T>(url: string) {
    const { token } = useAppSelector(state => state.auth)
    const [data, setData] = useState<T|null>(null);

    useEffect(() => {
        axiosApi.get<T>(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((axiosResult) => {
            const { data } = axiosResult;
            setData(data)
        });
    }, [url]);

    return [data];
};

export default useFetch;