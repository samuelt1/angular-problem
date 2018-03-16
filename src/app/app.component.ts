import { Component } from '@angular/core';
import { FpAuthService } from 'fp-ng-components';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(auth: FpAuthService) {
    console.log(environment);

  }
  title = 'app';
}
