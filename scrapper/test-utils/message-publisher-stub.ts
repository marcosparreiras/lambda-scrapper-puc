import type { MessagePublisher } from '../application/bondaires/message-publisher';

export class MessagePublisherStub implements MessagePublisher {
    private lastMessage?: string;
    private lastChannel?: string;

    public getLastMessage(): string {
        return this.lastMessage ?? '';
    }

    public getLastChannel(): string {
        return this.lastChannel ?? '';
    }

    async send(channel: string, message: string): Promise<void> {
        this.lastChannel = channel;
        this.lastMessage = message;
    }
}
