import { Like } from "./like";
import { User } from "./user";

export interface Post {
  postId: number;
  content: string;
  createdAt: Date;
  userId: number;
  user: User;
  comments?: Comment[]; 
  likes?: Like[]; 
}
