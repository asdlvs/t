import axios from "axios";
import store from "./store"

const http = axios.create({
    baseURL: "https://inmetamovingwebapi20220911185801.azurewebsites.net/api",
    headers: {
        "Content-type": "application/json",
        "X-Version": "1.0",
    }
});

http.interceptors.request.use(async (request) => {
    const accessToken = store.getState().auth;
    if (accessToken) {
        request.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    return request;
});

export default http;