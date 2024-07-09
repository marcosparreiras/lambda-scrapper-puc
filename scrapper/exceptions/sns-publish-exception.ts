export class SNSPublishException extends Error {
    public constructor() {
        super('Fail to push SNS message');
    }
}
