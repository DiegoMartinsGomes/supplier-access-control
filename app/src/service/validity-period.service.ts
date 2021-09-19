import axios, { AxiosInstance } from "axios";

export class ValidityPeriodService {

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

    static async post(startDate: Date, endDate: Date) {
        return await this.create().post('/validityperiods',
            {
                startDate: startDate,
                endDate: endDate
            });
    }
}
