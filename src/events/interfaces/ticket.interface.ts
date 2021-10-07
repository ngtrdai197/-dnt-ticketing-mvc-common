export interface ITicketCreated {
  id: string;
  title: string;
  price: number;
  version: number;
}
export interface ITicketUpdated extends ITicketCreated {}
