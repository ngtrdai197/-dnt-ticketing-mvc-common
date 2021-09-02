import { Subjects } from "../enums/subjects.enum";
import { IListenerEvent } from "../base/base.listener";
import { ITicketCreated } from "../interfaces/ticket.interface";

export class TicketCreatedEvent implements IListenerEvent {
  subject!: Subjects.TicketCreated;
  data!: ITicketCreated;
}
