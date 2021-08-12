export interface IntercomPlugin {
    registerIdentifiedUser(options: RegisterIdentifiedUserOptions): Promise<void>;
    registerUnidentifiedUser(): Promise<void>;
    updateUser(options: UserUpdateOptions): Promise<void>;
    logout(): Promise<void>;
    logEvent(options: LogEventOptions): Promise<void>;
    displayMessenger(): Promise<void>;
    displayMessageComposer(options: DisplayMessageComposerOptions): Promise<void>;
    displayHelpCenter(): Promise<void>;
    hideMessenger(): Promise<void>;
    displayLauncher(): Promise<void>;
    hideLauncher(): Promise<void>;
    hideIntercom(): Promise<void>;
    displayInAppMessages(): Promise<void>;
    hideInAppMessages(): Promise<void>;
    setUserHash(options: SetUserHashOptions): Promise<void>;
    setBottomPadding(options: SetBottomPaddingOptions): Promise<void>;
}
export interface UserUpdateOptions {
    userId?: string;
    email?: string;
    name?: string;
    phone?: string;
    languageOverride?: string;
    customAttributes: {
        [key: string]: any;
    };
}
export interface RegisterIdentifiedUserOptions {
    userId?: string;
    email?: string;
}
export interface LogEventOptions {
    name: string;
    data?: any;
}
export interface DisplayMessageComposerOptions {
    message: string;
}
export interface SetUserHashOptions {
    hmac: string;
}
export interface SetBottomPaddingOptions {
    value: string;
}
