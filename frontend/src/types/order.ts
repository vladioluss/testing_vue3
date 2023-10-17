export interface EventInterface {
  id?: number;
  name: string | undefined;
  address: string;
  date: string;
  status: object | string | "Новый" | "Выполнен";
  comment?: string;
}