import { Plugins } from "@capacitor/core";
const { IntercomPlugin } = Plugins;
export class Intercom {
    registerIdentifiedUser(options) {
        return IntercomPlugin.registerIdentifiedUser(options);
    }
    registerUnidentifiedUser() {
        return IntercomPlugin.registerUnidentifiedUser();
    }
    logout() {
        return IntercomPlugin.logout();
    }
    logEvent(options) {
        return IntercomPlugin.logEvent(options);
    }
    displayMessenger() {
        return IntercomPlugin.displayMessenger();
    }
    displayMessageComposer(options) {
        return IntercomPlugin.displayMessageComposer(options);
    }
    displayHelpCenter() {
        return IntercomPlugin.displayHelpCenter();
    }
    hideMessenger() {
        return IntercomPlugin.hideMessenger();
    }
    displayLauncher() {
        return IntercomPlugin.displayLauncher();
    }
    hideLauncher() {
        return IntercomPlugin.hideLauncher();
    }
    setBottomPadding(options) {
        return IntercomPlugin.setBottomPadding(options);
    }
}
//# sourceMappingURL=plugin.js.map