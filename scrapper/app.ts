import { z } from 'zod';
import { SQSEvent, type Context } from 'aws-lambda';
import { AxiosHTTPGateway } from './http-gateway/axios-http-gatway';
import type { HTTPGetaway } from './http-gateway/http-gateway';
import { CheerioNFEParser } from './nfe-parser/cheerio-nfe-parser';
import type { NFEParser } from './nfe-parser/nfe-parser';
import type { MessagePublisher } from './message/message-publisher';
import { SNSMessagePublisher } from './message/sns-message-publisher';
import { env } from './env';

export async function lambdaHandler(event: SQSEvent, context?: Context): Promise<void> {
    const eventRecordsBodySchema = z.array(
        z.object({
            messageId: z.string(),
            body: z.object({
                url: z.string().url(),
            }),
        }),
    );
    try {
        const records = eventRecordsBodySchema.parse(
            event.Records.map((record) => ({
                messageId: record.messageId,
                body: JSON.parse(record.body),
            })),
        );
        const httpGetaway: HTTPGetaway = new AxiosHTTPGateway();
        const messagePublisher: MessagePublisher = new SNSMessagePublisher();
        for (let record of records) {
            const httpReponse = await httpGetaway.get(record.body.url);
            const nfeParser: NFEParser = new CheerioNFEParser(httpReponse.body as string);
            const data = nfeParser.getData();
            await messagePublisher.send(env.AWS_PUBLISH_DATA_TOPIC_ARN, JSON.stringify(data));
        }
        return;
    } catch (error: unknown) {
        console.log(error);
        return;
    }
}
