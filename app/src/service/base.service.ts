import axios, { AxiosInstance } from "axios";

export class BaseService {

    static create(): AxiosInstance {
        return axios.create({
            baseURL: process.env.API,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': process.env.API,
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
    }
}
