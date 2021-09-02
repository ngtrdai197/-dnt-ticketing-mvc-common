import { Message } from "node-nats-streaming";
import { Listener } from "../base/base.listener";
import { Subjects } from "../enums/subjects.enum";
import { ITicketUpdated } from "../interfaces/ticket.interface";
import { TicketUpdatedEvent } from "../models/ticket-event.model";

export class TicketUpdatedListener extends Listener<
  TicketUpdatedEvent,
  ITicketUpdated
> {
  public readonly subject = Subjects.TicketUpdated;
  public readonly queueGroupName = "tickets-service";

  public onMessage(data: ITicketUpdated, msg: Message) {
    console.log("Event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
