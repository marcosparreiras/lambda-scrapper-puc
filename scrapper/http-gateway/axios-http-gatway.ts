import type { HTTPGetaway, HttpResponse } from './http-gateway';
import axios, { type Axios } from 'axios';

export class AxiosHTTPGateway implements HTTPGetaway {
    private axios: Axios;

    public constructor() {
        this.axios = axios;
    }

    async get(url: string): Promise<HttpResponse> {
        const axiosResponse = await this.axios.get(url);
        return {
            status: axiosResponse.status,
            body: axiosResponse.data,
        };
    }
}
