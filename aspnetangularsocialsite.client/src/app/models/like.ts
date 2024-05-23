
import { Post } from './post';
import { User } from './user';

export interface Like {
  likeId: number;
  postId: number;
  userId: number;
  post: Post;
  user: User;
}
