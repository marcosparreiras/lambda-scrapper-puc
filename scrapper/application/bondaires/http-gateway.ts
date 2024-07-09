export interface HttpResponse {
    status: number;
    body: any;
}

export interface HTTPGetaway {
    get(url: string): Promise<HttpResponse>;
}
