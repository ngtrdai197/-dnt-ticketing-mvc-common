import { Stan } from "node-nats-streaming";
import { Subjects } from "../enums/subjects.enum";

export interface IPublisherEvent {
  subject: Subjects;
  data: Record<string, any>;
}

export abstract class Publisher<T extends IPublisherEvent, TData> {
  abstract subject: T["subject"];
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: TData): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log("Event published to subject", this.subject);
        resolve();
      });
    });
  }
}
