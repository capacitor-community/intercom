var capacitorPlugin = (function (exports, core) {
    'use strict';

    const Intercom = core.registerPlugin('Intercom', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IntercomWeb()),
    });

    class IntercomWeb extends core.WebPlugin {
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
        async displayMessageComposer(_options) {
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
        async sendPushTokenToIntercom(_options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async handlePush(_notification) {
            throw this.unimplemented('Not implemented on web.');
        }
        async receivePush(_notification) {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IntercomWeb: IntercomWeb
    });

    exports.Intercom = Intercom;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
