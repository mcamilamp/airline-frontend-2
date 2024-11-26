import axios from "axios";
import Auth from "./auth";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api/v1",
})

apiClient.interceptors.request.use(config => {
    const auth = new Auth()
    if (auth.isAuthenticated()) {
        config.headers.Authorization = auth.getAuthToken()
    }

    return config
}, error => {
    return Promise.reject(error);
})

export class Requests {
    api = apiClient
    getApiClient() {
        return apiClient
    }
}