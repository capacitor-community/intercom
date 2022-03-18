var capacitorIntercom = (function (exports, core) {
    'use strict';

    const Intercom$1 = core.registerPlugin('Intercom', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IntercomWeb()),
    });

    class IntercomWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'Intercom',
                platforms: ['web'],
            });
        }
        async registerIdentifiedUser(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async registerUnidentifiedUser() {
            throw this.unimplemented('Not implemented on web.');
        }
        async updateUser(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async logout() {
            throw this.unimplemented('Not implemented on web.');
        }
        async logEvent(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async displayMessenger() {
            throw this.unimplemented('Not implemented on web.');
        }
        async displayMessageComposer(options) {
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
        async displayInAppMessages() {
            throw this.unimplemented('Not implemented on web.');
        }
        async hideInAppMessages() {
            throw this.unimplemented('Not implemented on web.');
        }
        async displayCarousel(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async setUserHash(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async setBottomPadding(options) {
            throw this.unimplemented('Not implemented on web.');
        }
        receivePush(notification) {
            throw this.unimplemented('Not implemented on web.');
        }
        sendPushTokenToIntercom(options) {
            throw this.unimplemented('Not implemented on web.');
        }
    }
    const Intercom = new IntercomWeb();

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IntercomWeb: IntercomWeb,
        Intercom: Intercom
    });

    exports.Intercom = Intercom$1;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
