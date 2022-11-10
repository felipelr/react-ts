import axios from "axios";

type HttpRequest = {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    token?: string;
    body?: any;
    params?: any;
}

export class ApiService {
    axiosApi = axios.create({
        //baseURL: "https://www.strabbrasil.com/wsdev/api",
        baseURL: "http://localhost:5001",
    })

    async request<T>({
        url, method, body, params, token
    }: HttpRequest) {
        try {
            const response = await this.axiosApi.request<T>({
                method,
                url,
                data: body,
                params,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...(token && { 'Authorization': `Bearer ${token}` })
                }
            })

            return response
        } catch (err) {
            console.log(err)
            return null
        }
    }
}