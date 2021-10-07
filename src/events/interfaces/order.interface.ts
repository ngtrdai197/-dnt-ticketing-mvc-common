import { ORDER_STATUS } from "../..";

export interface IOrderCreated {
  status: ORDER_STATUS;
  expiresAt: string | Date;
  userId: string;
  version: number;
  ticket: {
    id: string;
    price: number;
  };
}
export interface IOrderUpdated extends IOrderCreated {}
