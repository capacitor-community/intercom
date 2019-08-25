declare global {
  interface PluginRegistry {
    IntercomPlugin?: IntercomProtocol;
  }
}

export interface IntercomProtocol {
  registerIdentifiedUser(options: {
    userId?: string;
    email?: string;
  }): Promise<void>;
  registerUnidentifiedUser(): Promise<void>;
  logout(): Promise<void>;
  logEvent(options: { name: string; data?: any }): Promise<void>;
  displayMessenger(): Promise<void>;
  displayMessageComposer(options: { message: string }): Promise<void>;
  displayHelpCenter(): Promise<void>;
  hideMessenger(): Promise<void>;
  displayLauncher(): Promise<void>;
  hideLauncher(): Promise<void>;
  setBottomPadding(options: {
    bottomPadding: number;
  }): Promise<void>;
  setUserHash(options: { hmac: string }): Promise<void>;
}
