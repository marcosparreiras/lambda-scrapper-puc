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
    items: NFEItem[];
}

export interface NFEParser {
    getData(): NFEData;
}
