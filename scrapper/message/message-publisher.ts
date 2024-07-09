export interface MessagePublisher {
  send(channel: string, message: string): Promise<void>;
}
