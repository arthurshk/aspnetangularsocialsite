import { Connection } from "./connection";
import { Post } from "./post";

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash?: string; 
  profilePictureUrl?: string; 
  bio?: string; 
  posts?: Post[]; 
  connections?: Connection[]; 
}
