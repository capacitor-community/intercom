import { WebPlugin } from '@capacitor/core';
import type { IntercomPlugin, LogEventOptions, RegisterIdentifiedUserOptions, SetBottomPaddingOptions, SetUserHashOptions, UserUpdateOptions } from './definitions';
export declare class IntercomWeb extends WebPlugin implements IntercomPlugin {
    registerIdentifiedUser(_options: RegisterIdentifiedUserOptions): Promise<void>;
    registerUnidentifiedUser(): Promise<void>;
    updateUser(_options: UserUpdateOptions): Promise<void>;
    logout(): Promise<void>;
    logEvent(_options: LogEventOptions): Promise<void>;
    displayMessenger(): Promise<void>;
    displayMessageComposer(): Promise<void>;
    displayHelpCenter(): Promise<void>;
    hideMessenger(): Promise<void>;
    displayLauncher(): Promise<void>;
    hideLauncher(): Promise<void>;
    hideIntercom(): Promise<void>;
    displayInAppMessages(): Promise<void>;
    hideInAppMessages(): Promise<void>;
    setUserHash(_options: SetUserHashOptions): Promise<void>;
    setBottomPadding(_options: SetBottomPaddingOptions): Promise<void>;
}
