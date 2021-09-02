import { Publisher } from "../base/base.publisher";
import { Subjects } from "../enums/subjects.enum";
import { ITicketUpdated } from "../interfaces/ticket.interface";
import { TicketUpdatedEvent } from "../models/ticket-event.model";

export class TicketUpdatedPublisher extends Publisher<
  TicketUpdatedEvent,
  ITicketUpdated
> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
