import { Message } from "node-nats-streaming";
import { Listener } from "../base/base.listener";
import { QUEUE_GROUP_NAME } from "../enums/queue-group.enum";
import { Subjects } from "../enums/subjects.enum";
import { ITicketCreated } from "../interfaces/ticket.interface";
import { TicketCreatedEvent } from "../models/ticket-event.model";

export class TicketCreatedListener extends Listener<
  TicketCreatedEvent,
  ITicketCreated
> {
  public readonly subject = Subjects.TicketCreated;
  public readonly queueGroupName = QUEUE_GROUP_NAME.GROUP_TICKETS;

  public onMessage(data: ITicketCreated, msg: Message) {
    console.log("Event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    // Received and handle successfully -> mark for service won't attempts re-send new event
    msg.ack();
  }
}
