import axios, { AxiosInstance } from "axios";

export class BlockUnitService {

    static create(): AxiosInstance {
        return axios.create({
            baseURL: 'http://localhost:3000',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
    }

    static async post(data: any) {
        return await this.create().post('/blockunits', data);
    }

    static async getFormated() {
        return await this.create().get('/blockunits/formated');
    }
}