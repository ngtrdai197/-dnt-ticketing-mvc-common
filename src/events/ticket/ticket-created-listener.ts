import { Message } from "node-nats-streaming";
import { Listener } from "../base/base.listener";
import { Subjects } from "../enums/subjects.enum";
import { ITicketCreated } from "../interfaces/ticket.interface";
import { TicketCreatedEvent } from "../models/ticket-created-event.model";

export class TicketCreatedListener extends Listener<
  TicketCreatedEvent,
  ITicketCreated
> {
  public readonly subject = Subjects.TicketCreated;
  public readonly queueGroupName = "payments-service";

  public onMessage(data: ITicketCreated, msg: Message) {
    console.log("Event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
