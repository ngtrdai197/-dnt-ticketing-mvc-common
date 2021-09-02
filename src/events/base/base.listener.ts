import { Message, Stan, SubscriptionOptions } from "node-nats-streaming";
import { Subjects } from "../enums/subjects.enum";

export interface IListenerEvent {
  subject: Subjects;
  data: Record<string, any>;
}

export abstract class Listener<T extends IListenerEvent, TData> {
  abstract subject: T["subject"];
  abstract queueGroupName: string;
  abstract onMessage(data: TData, msg: Message): void;
  private client: Stan;
  protected ackWait = 5 * 1000;

  constructor(client: Stan) {
    this.client = client;
  }

  public listen(): void {
    const subscription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this._subscriptionOptions()
    );

    subscription.on("message", (msg: Message) => {
      console.log(`Message received: ${this.subject} / ${this.queueGroupName}`);

      const parsedData = this._parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }

  private _parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }

  private _subscriptionOptions(): SubscriptionOptions {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }
}
