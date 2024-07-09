import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { SpotitAuthService } from './services/spotit-auth.service';
// import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    AuthRoutingModule, 
    HttpClientModule, 
    AngularSvgIconModule.forRoot(),
    // OAuthModule.forRoot(),
  ],
  providers: [SpotitAuthService],
})
export class AuthModule {}
