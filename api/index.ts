import { Axios } from "axios";

export default function $api(callback: keyof Axios, ...args: Array<any>) {
    const runtimeConfig = useRuntimeConfig();
    return callback({
        withCredentials: true,
        baseURL: runtimeConfig.public.API_URL,   
    }, ...args)
}