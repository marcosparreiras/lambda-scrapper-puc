export interface NFEItem {
    name: string;
    code: string;
    price: number;
}

export interface NFEData {
    id: string;
    supermarketName: string;
    cnpj: string;
    address: string;
    date: Date;
    items: NFEItem[];
}

export interface NFEParser {
    load(html: string): void;
    getData(): NFEData;
}
