export interface User {
  user: string;
  password: string;
  name?: string;
  role?: "ADMIN" | "USER";
}