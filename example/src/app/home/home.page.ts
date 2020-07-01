import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {
    Plugins.IntercomPlugin.registerUnidentifiedUser();
  }
  displayLauncher() {
    Plugins.IntercomPlugin.displayLauncher();
  }
  hideLauncher() {
    Plugins.IntercomPlugin.hideLauncher();
  }
}
