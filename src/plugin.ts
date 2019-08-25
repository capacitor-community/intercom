import { Plugins } from '@capacitor/core';
import { IntercomProtocol } from './definitions';

const { IntercomPlugin } = Plugins;

export class Intercom implements IntercomProtocol {
  registerIdentifiedUser(options: {
    userId?: string;
    email?: string;
  }): Promise<void> {
    return IntercomPlugin.registerIdentifiedUser(options);
  }

  registerUnidentifiedUser(): Promise<void> {
    return IntercomPlugin.registerUnidentifiedUser();
  }

  logout(): Promise<void> {
    return IntercomPlugin.logout();
  }

  logEvent(options: { name: string; data?: any }): Promise<void> {
    return IntercomPlugin.logEvent(options);
  }

  displayMessenger(): Promise<void> {
    return IntercomPlugin.displayMessenger();
  }

  displayMessageComposer(options: { message: string }): Promise<void> {
    return IntercomPlugin.displayMessageComposer(options);
  }

  displayHelpCenter(): Promise<void> {
    return IntercomPlugin.displayHelpCenter();
  }

  hideMessenger(): Promise<void> {
    return IntercomPlugin.hideMessenger();
  }

  displayLauncher(): Promise<void> {
    return IntercomPlugin.displayLauncher();
  }

  hideLauncher(): Promise<void> {
    return IntercomPlugin.hideLauncher();
  }

  setBottomPadding(options: {bottomPadding: number}): Promise<void> {
    return IntercomPlugin.setBottomPadding(options);
  }
  
  setUserHash(options: { hmac: string }): Promise<void> {
    return IntercomPlugin.setUserHash(options);
  }
}
