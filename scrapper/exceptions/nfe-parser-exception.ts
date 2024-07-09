import { AppException } from './app-exception';

export class NFEExeception extends AppException {
    public constructor() {
        super('NFE parser fail to get data');
    }
}
