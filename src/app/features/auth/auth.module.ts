import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent
  ],
  imports: [
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [],
})
export class AuthModule {}
