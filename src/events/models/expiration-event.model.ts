import { IListenerEvent } from "../base";
import { Subjects } from "../enums";
import { IExpirationComplete } from "../interfaces";

export class ExpirationEventModel implements IListenerEvent {
  data!: IExpirationComplete;
  subject: Subjects = Subjects.ExpirationComplete;
}
