import { Subjects } from "../enums/subjects.enum";
import { IListenerEvent } from "../base/base.listener";
import { ITicketCreated, ITicketUpdated } from "../interfaces/ticket.interface";

export class TicketCreatedEvent implements IListenerEvent {
  subject!: Subjects.TicketCreated;
  data!: ITicketCreated;
}
export class TicketUpdatedEvent implements IListenerEvent {
  subject!: Subjects.TicketUpdated;
  data!: ITicketUpdated;
}
