declare global {
  interface PluginRegistry {
    IntercomPlugin?: IIntercomPlugin;
  }
}

export interface IIntercomPlugin {
  registerIdentifiedUser(options: {
    userId?: string;
    email?: string;
  }): Promise<void>;
  registerUnidentifiedUser(): Promise<void>;
  logout(): Promise<void>;
  logEvent(options: { eventName: string; metaData?: any }): Promise<void>;
  displayMessenger(): Promise<void>;
  displayMessageComposer(options: { message: string }): Promise<void>;
  displayHelpCenter(): Promise<void>;
  hideMessenger(): Promise<void>;
  displayLauncher(): Promise<void>;
  hideLauncher(): Promise<void>;
}
