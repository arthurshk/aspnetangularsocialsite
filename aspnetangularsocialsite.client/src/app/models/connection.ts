import { User } from './user';

export interface Connection {
  connectionId: number;
  userId: number;
  connectedUserId: number;
  user: User;
  connectedUser: User;
  connectedAt: Date;
}
