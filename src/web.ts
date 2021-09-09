import { WebPlugin } from '@capacitor/core';

import type {
  DisplayMessageComposerOptions,
  IntercomPlugin,
  LogEventOptions,
  PushNotificationSchema,
  RefreshedToken,
  RegisterIdentifiedUserOptions,
  SetBottomPaddingOptions,
  SetUserHashOptions,
  UserUpdateOptions,
} from './definitions';

export class IntercomWeb extends WebPlugin implements IntercomPlugin {
  async registerIdentifiedUser(
    _options: RegisterIdentifiedUserOptions,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async registerUnidentifiedUser(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async updateUser(_options: UserUpdateOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async logout(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async logEvent(_options: LogEventOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayMessenger(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayMessageComposer(
    _options: DisplayMessageComposerOptions,
  ): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayHelpCenter(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideMessenger(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayLauncher(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideLauncher(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideIntercom(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async displayInAppMessages(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideInAppMessages(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async setUserHash(_options: SetUserHashOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async setBottomPadding(_options: SetBottomPaddingOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async sendPushTokenToIntercom(_options: RefreshedToken): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async handlePush(_notification: PushNotificationSchema): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async receivePush(_notification: PushNotificationSchema): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
