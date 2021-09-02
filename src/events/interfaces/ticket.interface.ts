export interface ITicketCreated {
  id: string;
  title: string;
  price: number;
}
export interface ITicketUpdated extends ITicketCreated {}
