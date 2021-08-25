export interface IUser {
  id: number;
  name: string;
  role: 'employee' | 'admin';
  created_at: string;
  updated_at: string;
}
