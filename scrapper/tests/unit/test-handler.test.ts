import { expect, describe, it } from '@jest/globals';
import type { SQSEvent } from 'aws-lambda';
import { lambdaHandler } from '../../app';

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: SQSEvent = {
            Records: [
                {
                    messageId: '059f36b4-87a3-44ab-83d2-661975830a7d',
                    receiptHandle: 'AQEBwJnKyrHigUMZj6rYigCgxlaS3SLy0a...',
                    body: '{"url": "https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/qrcode.xhtml?p=31240600070509003045652060001144891337638029%7C2%7C1%7C1%7C57332DDE93D7E7F7AA49BF32BE6A6D2C88976EBE" }',
                    attributes: {
                        ApproximateReceiveCount: '1',
                        SentTimestamp: '1545082649183',
                        SenderId: 'AIDAIENQZJOLO23YVJ4VO',
                        ApproximateFirstReceiveTimestamp: '1545082649185',
                    },
                    messageAttributes: {},
                    md5OfBody: '098f6bcd4621d373cade4e832627b4f6',
                    eventSource: 'aws:sqs',
                    eventSourceARN: 'arn:aws:sqs:us-east-1:111122223333:my-queue',
                    awsRegion: 'us-east-1',
                },
            ],
        };

        await lambdaHandler(event);

        expect(1).toEqual(1);
    });
});
