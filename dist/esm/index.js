import { registerPlugin } from '@capacitor/core';
const Intercom = registerPlugin('Intercom', {
    web: () => import('./web').then(m => new m.IntercomWeb()),
});
export * from './definitions';
export { Intercom };
//# sourceMappingURL=index.js.map