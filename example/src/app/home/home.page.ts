import { Component } from '@angular/core';
import { Intercom } from '@capacitor-community/intercom';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    Intercom.registerUnidentifiedUser();
  }
  displayLauncher() {
    Intercom.displayLauncher();
  }
  hideLauncher() {
    Intercom.hideLauncher();
  }
}
