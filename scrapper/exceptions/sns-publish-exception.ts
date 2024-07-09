import { AppException } from './app-exception';

export class SNSPublishException extends AppException {
    public constructor() {
        super('Fail to push SNS message');
    }
}
