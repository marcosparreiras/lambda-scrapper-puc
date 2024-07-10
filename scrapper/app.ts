import { z, ZodError } from 'zod';
import { env } from './env';
import { SQSEvent, type Context } from 'aws-lambda';
import type { HTTPGetaway } from './application/bondaries/http-gateway';
import { CheerioNFEParser } from './adapters/cheerio-nfe-parser';
import type { NFEParser } from './application/bondaries/nfe-parser';
import type { MessagePublisher } from './application/bondaries/message-publisher';
import { ExtractAndPublishNFEDataUseCase } from './application/use-cases/extract-and-publish-nfe-data-use-case';
import { AxiosHTTPGateway } from './adapters/axios-http-gatway';
import { SNSMessagePublisher } from './adapters/sns-message-publisher';
import { AppException } from './exceptions/app-exception';

export async function lambdaHandler(event: SQSEvent, _context?: Context): Promise<void> {
    const eventRecordsBodySchema = z.array(
        z.object({
            body: z.object({
                url: z.string().url(),
            }),
        }),
    );
    try {
        const records = eventRecordsBodySchema.parse(
            event.Records.map((record) => ({
                body: JSON.parse(record.body),
            })),
        );

        const httpGetaway: HTTPGetaway = new AxiosHTTPGateway();
        const messagePublisher: MessagePublisher = new SNSMessagePublisher();
        const nfeParser: NFEParser = new CheerioNFEParser();
        const extractAndPublishNFEDataUseCase = new ExtractAndPublishNFEDataUseCase(
            httpGetaway,
            messagePublisher,
            nfeParser,
        );

        for (let record of records) {
            await extractAndPublishNFEDataUseCase.execute({
                url: record.body.url,
                channel: env.AWS_PUBLISH_DATA_TOPIC_ARN,
            });
        }

        return;
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            console.log(error.format());
            return;
        }
        if (error instanceof AppException) {
            console.log(error.message);
            return;
        }
        console.log(error);
        return;
    }
}
