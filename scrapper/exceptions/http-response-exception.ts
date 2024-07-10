import { AppException } from './app-exception';

export class HttpResponseException extends AppException {
    public constructor(url: string) {
        super(`Could not get html (${url})`);
    }
}
