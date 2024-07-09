import { load, type CheerioAPI, type Element } from 'cheerio';
import type { NFEData, NFEItem, NFEParser } from './nfe-parser';
import { NFEExeception } from '../exceptions/nfe-parser-exception';

export class CheerioNFEParser implements NFEParser {
    private html: CheerioAPI;

    public constructor(html: string) {
        this.html = load(html);
    }

    public getData(): NFEData {
        return {
            supermarket: this.getSupermarketName(),
            cnpj: this.getCNPJ(),
            address: this.getAddress(),
            items: this.getItems(),
        };
    }

    private getSupermarketName(): string {
        return this.html('thead h4 b').text();
    }

    private getCNPJ(): string {
        const element = this.html('tbody tr td').first();
        const cnpjMatch = element.text().match(/\b\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}\b/);
        if (cnpjMatch === null) {
            throw new NFEExeception();
        }
        return cnpjMatch[0];
    }

    private getAddress(): string {
        return this.html('tbody tr td').eq(1).text();
    }

    private getItems(): NFEItem[] {
        const items = this.html('#myTable tr').map(this.parseItemsTableRow.bind(this)).get();
        return items;
    }

    private parseItemsTableRow(_index: number, element: Element) {
        const columns = this.html(element)
            .find('td')
            .map((_idx, td) => this.html(td).text().trim())
            .get();

        const match: { [key: string]: RegExpMatchArray | null } = {
            nameMatch: columns[0].match(/^(.*?)\s*\(Código: \d+\)$/),
            codeMatch: columns[0].match(/Código: (\d+)/),
            qtyMatch: columns[1].match(/Qtde total de ítens: (\d+\.\d+)/),
            unitMatch: columns[2].match(/UN: (.*)/),
            priceMatch: columns[3].match(/\b\d*,\d*\b/),
        };

        for (let key in match) {
            if (match[key] === null) {
                throw new NFEExeception();
            }
        }

        return {
            name: (match.nameMatch as RegExpMatchArray)[1],
            code: (match.codeMatch as RegExpExecArray)[1],
            qty: parseFloat((match.qtyMatch as RegExpExecArray)[1]),
            unit: (match.unitMatch as RegExpExecArray)[1].trim(),
            price: parseFloat((match.priceMatch as RegExpExecArray)[0].split(',').join('.')),
        };
    }
}
