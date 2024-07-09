import { env } from 'process';
import { SNSPublishException } from '../exceptions/sns-publish-exception';
import type { MessagePublisher } from './message-publisher';
import { SNS } from 'aws-sdk';

export class SNSMessagePublisher implements MessagePublisher {
    private sns: SNS;

    public constructor() {
        this.sns = new SNS({
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            region: env.AWS_REGION,
        });
    }

    public async send(channel: string, message: string): Promise<void> {
        const params = {
            TopicArn: channel,
            Message: message,
            MessageGroupId: '1',
        };
        const response = await this.sns.publish(params).promise();
        if (!response.MessageId) {
            throw new SNSPublishException();
        }
        return;
    }
}
