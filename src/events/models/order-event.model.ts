import { Subjects } from "../enums";
import { IListenerEvent } from "../base";
import { IOrderCreated, IOrderPaidSuccess, IOrderUpdated } from "../interfaces";

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

export class OrderPaidSuccessfulEvent implements IListenerEvent {
  subject!: Subjects.OrderPaidSuccessful;
  data!: IOrderPaidSuccess;
}
