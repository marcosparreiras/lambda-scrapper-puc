export class NFEExeception extends Error {
    public constructor() {
        super('NFE parser fail to get data');
    }
}
