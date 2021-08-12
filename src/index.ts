import { registerPlugin } from '@capacitor/core';

import type { IntercomPlugin } from './definitions';

const Intercom = registerPlugin<IntercomPlugin>('IntercomPlugin', {
  web: () => import('./web').then(m => new m.IntercomWeb()),
});

export * from './definitions';
export { Intercom };
