import { IntercomProtocol, UserUpdateOptions } from './definitions';
export declare class Intercom implements IntercomProtocol {
    registerIdentifiedUser(options: {
        userId?: string;
        email?: string;
    }): Promise<void>;
    registerUnidentifiedUser(): Promise<void>;
    updateUser(options: UserUpdateOptions): Promise<void>;
    logout(): Promise<void>;
    logEvent(options: {
        name: string;
        data?: any;
    }): Promise<void>;
    displayMessenger(): Promise<void>;
    displayMessageComposer(options: {
        message: string;
    }): Promise<void>;
    displayHelpCenter(): Promise<void>;
    hideMessenger(): Promise<void>;
    displayLauncher(): Promise<void>;
    hideLauncher(): Promise<void>;
    displayInAppMessages(): Promise<void>;
    hideInAppMessages(): Promise<void>;
    setUserHash(options: {
        hmac: string;
    }): Promise<void>;
    setBottomPadding(options: {
        value: string;
    }): Promise<void>;
}
