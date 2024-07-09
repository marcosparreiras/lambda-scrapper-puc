import { AppException } from './app-exception';

export class NFEParserHTMLNotLoadedException extends AppException {
    public constructor() {
        super('NFE parser HTML not loaded exception');
    }
}
