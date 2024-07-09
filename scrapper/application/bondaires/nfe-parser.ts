export interface NFEItem {
    name: string;
    code: string;
    qty: number;
    unit: string;
    price: number;
}

export interface NFEData {
    supermarket: string | null;
    cnpj: string | null;
    address: string | null;
    date: Date;
    items: NFEItem[];
}

export interface NFEParser {
    load(html: string): void;
    getData(): NFEData;
}
