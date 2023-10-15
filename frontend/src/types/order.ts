export interface EventInterface {
  id?: number;
  name: string;
  address: string;
  date: string;
  status: object | string | "Новый" | "Выполнен";
  comment: string;
}