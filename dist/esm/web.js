import { WebPlugin } from '@capacitor/core';
export class IntercomWeb extends WebPlugin {
    async registerIdentifiedUser(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async registerUnidentifiedUser() {
        throw this.unimplemented('Not implemented on web.');
    }
    async updateUser(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async logout() {
        throw this.unimplemented('Not implemented on web.');
    }
    async logEvent(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async displayMessenger() {
        throw this.unimplemented('Not implemented on web.');
    }
    async displayMessageComposer() {
        throw this.unimplemented('Not implemented on web.');
    }
    async displayHelpCenter() {
        throw this.unimplemented('Not implemented on web.');
    }
    async hideMessenger() {
        throw this.unimplemented('Not implemented on web.');
    }
    async displayLauncher() {
        throw this.unimplemented('Not implemented on web.');
    }
    async hideLauncher() {
        throw this.unimplemented('Not implemented on web.');
    }
    async hideIntercom() {
        throw this.unimplemented('Not implemented on web.');
    }
    async displayInAppMessages() {
        throw this.unimplemented('Not implemented on web.');
    }
    async hideInAppMessages() {
        throw this.unimplemented('Not implemented on web.');
    }
    async setUserHash(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
    async setBottomPadding(_options) {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map