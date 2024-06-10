import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { LikeListComponent } from './components/like-list/like-list.component';
import { LikeDetailComponent } from './components/like-detail/like-detail.component';
import { LikeFormComponent } from './components/like-form/like-form.component';
import { ConnectionListComponent } from './components/connection-list/connection-list.component';
import { ConnectionDetailComponent } from './components/connection-detail/connection-detail.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    PostListComponent,
    PostDetailComponent,
    PostFormComponent,
    CommentListComponent,
    CommentDetailComponent,
    CommentFormComponent,
    LikeListComponent,
    LikeDetailComponent,
    LikeFormComponent,
    ConnectionListComponent,
    ConnectionDetailComponent,
    ConnectionFormComponent,
    RegistrationComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5001'],
        disallowedRoutes: ['localhost:5001/api/auth/login', 'localhost:5001/api/auth/register']
      }
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
