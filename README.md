# capacitor-intercom [![npm version](https://badge.fury.io/js/capacitor-intercom.svg)](https://badge.fury.io/js/capacitor-intercom)

Capacitor plugin to enable features from [Intercom](https://www.intercom.com)

## API

- registerIdentifiedUser
- registerUnidentifiedUser
- logout
- logEvent
- displayMessenger
- displayMessageComposer
- displayHelpCenter
- hideMessenger
- displayLauncher
- hideLauncher
- setUserHash

## Usage

```js
import { Intercom } from "capacitor-intercom";
const intercom = new Intercom();

import { Plugins } from "@capacitor/core";
const { PushNotifications } = Plugins;

//
// Register for push notifications from Intercom
PushNotifications.register()

//
// Register an indetified user
intercom
  .registerIdentifiedUser({ userId: 123456 }) // or email or both

//
// Register a log event
intercom
  .logEvent({ name: "my-event", data: { pi: 3.14 } })

//
// Display the message composer
intercom
  .displayMessageComposer({ message: "Hello there!" } })

//
// Identity Verification
// https://developers.intercom.com/installing-intercom/docs/ios-identity-verification
intercom
  .setUserHash({ hmac: "xyz" } })
```

## iOS setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save capacitor-intercom`
- `mkdir www && touch www/index.html`
- `npx cap add ios`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "IntercomPlugin": {
      "ios-apiKey": "ios_sdk-xxx",
      "ios-appId": "yyy"
    }
  }
…
}
```

- `npx cap open ios`
- sign your app at xcode (general tab)

> Tip: every time you change a native code you may need to clean up the cache (Product > Clean build folder) and then run the app again.

## Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save capacitor-intercom`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "IntercomPlugin": {
      "android-apiKey": "android_sdk-xxx",
      "android-appId": "yyy"
    }
  }
…
}
```

- `npx cap open android`
- `[extra step]` in android case we need to tell Capacitor to initialise the plugin:

> on your `MainActivity.java` file add `import io.stewan.capacitor.intercom.IntercomPlugin;` and then inside the init callback `add(IntercomPlugin.class);`

Now you should be set to go. Try to run your client using `ionic cap run android --livereload`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.

## Sample app

(coming soon)

## You may also like

- [capacitor-analytics](https://github.com/stewwan/capacitor-analytics)
- [capacitor-fcm](https://github.com/stewwan/capacitor-fcm)
- [capacitor-media](https://github.com/stewwan/capacitor-media)
- [capacitor-datepick](https://github.com/stewwan/capacitor-datepick)
- [capacitor-fcm](https://github.com/stewwan/capacitor-fcm)
- [capacitor-twitter](https://github.com/stewwan/capacitor-twitter)

Cheers 🍻

Follow me [@Twitter](https://twitter.com/StewanSilva)

## License

MIT
