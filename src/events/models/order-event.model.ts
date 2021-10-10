import { Subjects } from "../enums/subjects.enum";
import { IListenerEvent } from "../base/base.listener";
import { IOrderCreated, IOrderUpdated } from "../interfaces/order.interface";

export class OrderCreatedEvent implements IListenerEvent {
  subject!: Subjects.OrderCreated;
  data!: IOrderCreated;
}
export class OrderUpdatedEvent implements IListenerEvent {
  subject!: Subjects.OrderUpdated;
  data!: IOrderUpdated;
}

export class OrderCancelledEvent {
  subject!: Subjects.OrderCancelled;
  data!: IOrderUpdated;
}