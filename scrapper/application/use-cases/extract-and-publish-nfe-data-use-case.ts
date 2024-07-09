import type { HTTPGetaway } from '../bondaires/http-gateway';
import type { MessagePublisher } from '../bondaires/message-publisher';
import type { NFEParser } from '../bondaires/nfe-parser';

type Input = {
    channel: string;
    url: string;
};

export class ExtractAndPublishNFEDataUseCase {
    public constructor(
        readonly httpGetaway: HTTPGetaway,
        readonly messagePublisher: MessagePublisher,
        readonly nfeParser: NFEParser,
    ) {}

    public async execute({ url, channel }: Input): Promise<void> {
        const httpReponse = await this.httpGetaway.get(url);
        this.nfeParser.load(httpReponse.body as string);
        const data = this.nfeParser.getData();
        const message = JSON.stringify(data);
        await this.messagePublisher.send(channel, message);
    }
}
