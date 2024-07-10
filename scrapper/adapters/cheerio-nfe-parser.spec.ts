import { describe } from '@jest/globals';
import { CheerioNFEParser } from './cheerio-nfe-parser';
import { HttpGetawayStub } from '../test-utils/http-gataway-stub';

describe('Cheeiro-nfe-parser', () => {
    let cheerioNFEParser: CheerioNFEParser;

    beforeEach(() => {
        cheerioNFEParser = new CheerioNFEParser();
    });

    it('Should be able to get the nfe html data', async () => {
        const nfeHTML = (await new HttpGetawayStub().get('nfe')).body as string;
        cheerioNFEParser.load(nfeHTML);
        const output = cheerioNFEParser.getData();

        expect(output).toEqual(
            expect.objectContaining({
                supermarket: 'COMERCIAL DAHANA LIMITADA SN 422',
                address: 'R GRAO MOGOL, 202, CARMO, 3106200 - BELO HORIZONTE, MG',
                cnpj: '00.070.509/0030-45',
                date: new Date('2024-06-07T12:26:37.000Z'),
                items: expect.arrayContaining([
                    {
                        code: '154923',
                        name: 'LEITE LVIDA PORTO ALEGRE 1L INTEG',
                        price: 105.8,
                        qty: 20,
                        unit: 'UN',
                    },
                    {
                        code: '93567',
                        name: 'CAFE PO FINO-GRAO 500G PC TRAD',
                        price: 33.98,
                        qty: 2,
                        unit: 'UN',
                    },
                    {
                        code: '156184',
                        name: 'ACUCAR CRISTAL DELTA 5kg-PC',
                        price: 17.9,
                        qty: 1,
                        unit: 'UN',
                    },
                ]),
            }),
        );
    });
});
