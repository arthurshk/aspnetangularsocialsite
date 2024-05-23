import { Post } from "./post";
import { User } from "./user";

export interface Comment {
  commentId: number;
  content: string;
  createdAt: Date;
  postId: number;
  userId: number;
  post: Post;
  user: User;
}
