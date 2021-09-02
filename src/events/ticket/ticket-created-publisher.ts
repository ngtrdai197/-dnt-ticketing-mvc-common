import { Publisher } from "../base/base.publisher";
import { Subjects } from "../enums/subjects.enum";
import { ITicketCreated } from "../interfaces/ticket.interface";
import { TicketCreatedEvent } from "../models/ticket-created-event.model";

export class TicketCreatedPublisher extends Publisher<
  TicketCreatedEvent,
  ITicketCreated
> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
