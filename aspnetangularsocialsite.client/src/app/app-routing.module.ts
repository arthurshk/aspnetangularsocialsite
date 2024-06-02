import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { ConnectionListComponent } from './components/connection-list/connection-list.component';
import { ConnectionDetailComponent } from './components/connection-detail/connection-detail.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { LikeDetailComponent } from './components/like-detail/like-detail.component';
import { LikeFormComponent } from './components/like-form/like-form.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';  

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'post-form', component: PostFormComponent },
  { path: 'comments', component: CommentListComponent },
  { path: 'comments/:id', component: CommentDetailComponent },
  { path: 'comment-form', component: CommentFormComponent },
  { path: 'connections', component: ConnectionListComponent },
  { path: 'connections/:id', component: ConnectionDetailComponent },
  { path: 'connection-form', component: ConnectionFormComponent },
  { path: 'likes', component: LikeListComponent },
  { path: 'likes/:id', component: LikeDetailComponent },
  { path: 'like-form', component: LikeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
