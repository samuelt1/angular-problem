import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { AppComponent } from './app.component';
import { FpAuthModule } from 'fp-ng-components';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingModule.forRoot({
      backdropBackgroundColour: environment.a,
      primaryColour: '#000000',
      fullScreenBackdrop: false,
      animationType: ANIMATION_TYPES.rectangleBounce
    }),
    FpAuthModule.forRoot({
      userServiceAPI: environment.c,
      parentURL: environment.d,
    })
    // LoadingModule.forRoot({
    //   backdropBackgroundColour: environment.a,
    //   primaryColour: '#000000',
    //   fullScreenBackdrop: environment.b,
    //   animationType: ANIMATION_TYPES.rectangleBounce
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
