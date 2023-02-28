import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    SignupComponent,
    // InputComponent,
    // ButtonComponent
  ],
  imports: [
    AuthRoutingModule,
    ComponentsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AuthModule {}
