import { describe } from '@jest/globals';
import { ExtractAndPublishNFEDataUseCase } from './extract-and-publish-nfe-data-use-case';
import { MessagePublisherStub } from '../../test-utils/message-publisher-stub';
import { HttpGetawayStub } from '../../test-utils/http-gataway-stub';
import { CheerioNFEParser } from '../../adapters/cheerio-nfe-parser';

describe('ExtractAndPublishNFEUseCase', () => {
    let httpGetaway: HttpGetawayStub;
    let messagePublisher: MessagePublisherStub;

    let nfeParser: CheerioNFEParser;
    let extractAndPublishNFEDataUseCase: ExtractAndPublishNFEDataUseCase;

    beforeEach(() => {
        httpGetaway = new HttpGetawayStub();
        messagePublisher = new MessagePublisherStub();
        nfeParser = new CheerioNFEParser();
        extractAndPublishNFEDataUseCase = new ExtractAndPublishNFEDataUseCase(httpGetaway, messagePublisher, nfeParser);
    });

    it('Should be able to publish a nfe data as a message on a given channel', async () => {
        const input = {
            url: 'https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=01',
            channel: 'my-channel',
        };

        await extractAndPublishNFEDataUseCase.execute(input);

        expect(messagePublisher.getLastChannel()).toEqual(input.channel);
        const message = JSON.parse(messagePublisher.getLastMessage());
        expect(message).toEqual(
            expect.objectContaining({
                id: '31-24/06-00.070.509/0030-45-65-206-000.114.489-133.763.8029',
                supermarketName: 'COMERCIAL DAHANA LIMITADA SN 422',
                address: 'R GRAO MOGOL, 202, CARMO, 3106200 - BELO HORIZONTE, MG',
                cnpj: '00.070.509/0030-45',
                date: '2024-06-07T12:26:37.000Z',
                items: expect.arrayContaining([
                    {
                        code: '154923',
                        name: 'LEITE LVIDA PORTO ALEGRE 1L INTEG',
                        price: 5.29,
                    },
                    {
                        code: '93567',
                        name: 'CAFE PO FINO-GRAO 500G PC TRAD',
                        price: 16.99,
                    },
                    {
                        code: '156184',
                        name: 'ACUCAR CRISTAL DELTA 5kg-PC',
                        price: 17.9,
                    },
                ]),
            }),
        );
    });
});
