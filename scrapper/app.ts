import { SQSEvent, type Context } from 'aws-lambda';

export async function lambdaHandler(event: SQSEvent, context?: Context): Promise<void> {
    console.log(event);
    console.log(context);
    return;
}
