import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { GlobalLayoutComponent } from './core/components/global-layout/global-layout.component';
import { PostsComponent } from './features/posts/pages/posts/posts.component';
import { InputComponent } from './shared/components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    ButtonComponent,
    GlobalLayoutComponent,
    PostsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
