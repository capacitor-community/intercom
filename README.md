<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Intercom</h3>
<p align="center"><strong><code>@capacitor-community/intercom</code></strong></p>
<p align="center">
  Capacitor community plugin for enabling Intercom capabilities
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2025?style=flat-square" />
  <a href="https://www.npmjs.com/package/@capacitor-community/intercom"><img src="https://img.shields.io/npm/l/@capacitor-community/intercom?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/intercom"><img src="https://img.shields.io/npm/dw/@capacitor-community/intercom?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/intercom"><img src="https://img.shields.io/npm/v/@capacitor-community/intercom?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors"><img src="https://img.shields.io/badge/all%20contributors-22-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer   | GitHub                                  | Social                              |
| ------------ | --------------------------------------- | ----------------------------------- |
| Stewan Silva | [stewones](https://github.com/stewones) | [@stewones](https://x.com/stewones) |

## Compatibility

| Capacitor | Intercom iOS | Intercom Android | iOS Target | Android Target |
| --------- | ------------ | ---------------- | ---------- | -------------- |
| 7.x       | 18.x         | 15.x             | 15.0       | 35             |
| 6.x       | 16.x         | 12.x             | 13.0       | 34             |

> Note: This plugin follows semantic versioning aligned with [Capacitor](https://github.com/ionic-team/capacitor/blob/main/CHANGELOG.md) and maintains compatibility with Intercom SDKs ([iOS](https://github.com/intercom/intercom-ios/releases), [Android](https://github.com/intercom/intercom-android/releases)). If you encounter any issues due to versioning inconsistencies, please [open an issue](https://github.com/capacitor-community/intercom/issues/new?template=bug_report.md) to help us improve the plugin.

## Installation

Using npm:

```bash
npm install @capacitor-community/intercom
```

Using yarn:

```bash
yarn add @capacitor-community/intercom
```

Sync native files:

```bash
npx cap sync
```

## Usage

```js
import { Intercom } from '@capacitor-community/intercom';
import { PushNotifications } from '@capacitor/push-notifications';

// Register for push notifications from Intercom
PushNotifications.register();

// Register an indetified user
Intercom.registerIdentifiedUser({ userId: 123456 });
Intercom.registerIdentifiedUser({ email: 'test@example.com' });
Intercom.registerIdentifiedUser({ userId: 123456, email: 'test@example.com' });

// Register a log event
Intercom.logEvent({ name: 'my-event', data: { pi: 3.14 } });

// Display the message composer
Intercom.displayMessageComposer({ message: 'Hello there!' });

// Identity Verification
// https://developers.intercom.com/installing-intercom/docs/ios-identity-verification
Intercom.setUserHash({ hmac: 'xyz' });

// Secure Your Messenger
// https://developers.intercom.com/installing-intercom/ios/secure-your-messenger
Intercom.setUserJwt({ jwt: 'xyz' });
```

## iOS setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save @capacitor-community/intercom`
- `mkdir www && touch www/index.html`
- `npx cap add ios`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy"
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
- `npm install —-save @capacitor-community/intercom`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "Intercom": {
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
…
}
```

- `npx cap open android`

Now you should be set to go. Try to run your client using `ionic cap run android --livereload`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.

## API

<docgen-index>

* [`loadWithKeys(...)`](#loadwithkeys)
* [`registerIdentifiedUser(...)`](#registeridentifieduser)
* [`registerUnidentifiedUser()`](#registerunidentifieduser)
* [`updateUser(...)`](#updateuser)
* [`logout()`](#logout)
* [`logEvent(...)`](#logevent)
* [`displayMessenger()`](#displaymessenger)
* [`displayMessageComposer(...)`](#displaymessagecomposer)
* [`displayHelpCenter()`](#displayhelpcenter)
* [`hideMessenger()`](#hidemessenger)
* [`displayLauncher()`](#displaylauncher)
* [`hideLauncher()`](#hidelauncher)
* [`displayInAppMessages()`](#displayinappmessages)
* [`hideInAppMessages()`](#hideinappmessages)
* [`displayCarousel(...)`](#displaycarousel)
* [`setUserHash(...)`](#setuserhash)
* [`setUserJwt(...)`](#setuserjwt)
* [`setBottomPadding(...)`](#setbottompadding)
* [`sendPushTokenToIntercom(...)`](#sendpushtokentointercom)
* [`receivePush(...)`](#receivepush)
* [`displayArticle(...)`](#displayarticle)
* [`addListener('windowDidShow', ...)`](#addlistenerwindowdidshow-)
* [`addListener('windowDidHide', ...)`](#addlistenerwindowdidhide-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### loadWithKeys(...)

```typescript
loadWithKeys(options: { appId?: string; apiKeyIOS?: string; apiKeyAndroid?: string; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ appId?: string; apiKeyIOS?: string; apiKeyAndroid?: string; }</code> |

--------------------


### registerIdentifiedUser(...)

```typescript
registerIdentifiedUser(options: { userId?: string; email?: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ userId?: string; email?: string; }</code> |

--------------------


### registerUnidentifiedUser()

```typescript
registerUnidentifiedUser() => Promise<void>
```

--------------------


### updateUser(...)

```typescript
updateUser(options: IntercomUserUpdateOptions) => Promise<void>
```

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#intercomuserupdateoptions">IntercomUserUpdateOptions</a></code> |

--------------------


### logout()

```typescript
logout() => Promise<void>
```

--------------------


### logEvent(...)

```typescript
logEvent(options: { name: string; data?: any; }) => Promise<void>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ name: string; data?: any; }</code> |

--------------------


### displayMessenger()

```typescript
displayMessenger() => Promise<void>
```

--------------------


### displayMessageComposer(...)

```typescript
displayMessageComposer(options: { message: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

--------------------


### displayHelpCenter()

```typescript
displayHelpCenter() => Promise<void>
```

--------------------


### hideMessenger()

```typescript
hideMessenger() => Promise<void>
```

--------------------


### displayLauncher()

```typescript
displayLauncher() => Promise<void>
```

--------------------


### hideLauncher()

```typescript
hideLauncher() => Promise<void>
```

--------------------


### displayInAppMessages()

```typescript
displayInAppMessages() => Promise<void>
```

--------------------


### hideInAppMessages()

```typescript
hideInAppMessages() => Promise<void>
```

--------------------


### displayCarousel(...)

```typescript
displayCarousel(options: { carouselId: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ carouselId: string; }</code> |

--------------------


### setUserHash(...)

```typescript
setUserHash(options: { hmac: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ hmac: string; }</code> |

--------------------


### setUserJwt(...)

```typescript
setUserJwt(options: { jwt: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ jwt: string; }</code> |

--------------------


### setBottomPadding(...)

```typescript
setBottomPadding(options: { value: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

--------------------


### sendPushTokenToIntercom(...)

```typescript
sendPushTokenToIntercom(options: { value: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

--------------------


### receivePush(...)

```typescript
receivePush(notification: IntercomPushNotificationData) => Promise<void>
```

| Param              | Type                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| **`notification`** | <code><a href="#intercompushnotificationdata">IntercomPushNotificationData</a></code> |

--------------------


### displayArticle(...)

```typescript
displayArticle(options: { articleId: string; }) => Promise<void>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ articleId: string; }</code> |

--------------------


### addListener('windowDidShow', ...)

```typescript
addListener(eventName: 'windowDidShow', listenerFunc: () => void) => Promise<PluginListenerHandle>
```

| Param              | Type                         |
| ------------------ | ---------------------------- |
| **`eventName`**    | <code>'windowDidShow'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### addListener('windowDidHide', ...)

```typescript
addListener(eventName: 'windowDidHide', listenerFunc: () => void) => Promise<PluginListenerHandle>
```

| Param              | Type                         |
| ------------------ | ---------------------------- |
| **`eventName`**    | <code>'windowDidHide'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### Interfaces


#### IntercomUserUpdateOptions

| Prop                   | Type                                 |
| ---------------------- | ------------------------------------ |
| **`userId`**           | <code>string</code>                  |
| **`email`**            | <code>string</code>                  |
| **`name`**             | <code>string</code>                  |
| **`phone`**            | <code>string</code>                  |
| **`languageOverride`** | <code>string</code>                  |
| **`customAttributes`** | <code>{ [key: string]: any; }</code> |


#### IntercomPushNotificationData

| Prop                            | Type                |
| ------------------------------- | ------------------- |
| **`conversation_id`**           | <code>string</code> |
| **`message`**                   | <code>string</code> |
| **`body`**                      | <code>string</code> |
| **`author_name`**               | <code>string</code> |
| **`image_url`**                 | <code>string</code> |
| **`app_name`**                  | <code>string</code> |
| **`receiver`**                  | <code>string</code> |
| **`conversation_part_type`**    | <code>string</code> |
| **`intercom_push_type`**        | <code>string</code> |
| **`uri`**                       | <code>string</code> |
| **`push_only_conversation_id`** | <code>string</code> |
| **`instance_id`**               | <code>string</code> |
| **`title`**                     | <code>string</code> |
| **`priority`**                  | <code>number</code> |


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>

## Notice 🚀

We're starting fresh under an official org. If you were using the previous npm package `capacitor-intercom`, please update your package.json to `@capacitor-community/intercom`. Check out [changelog](/CHANGELOG.md) for more info.

## Breaking changes from Capacitor v2 to v3

- `UserUpdateOptions` option type becomes `IntercomUserUpdateOptions`
- `IntercomPlugin` configuration key becomes `Intercom`
- `android-apiKey` config key becomes `androidApiKey`
- `android-appId` config key becomes `androidAppId`
- `ios-apiKey` config key becomes `iosApiKey`
- `ios-appId` config key becomes `iosAppId`
- [Switch from CAPBridge to ApplicationDelegateProxy](https://capacitorjs.com/docs/updating/3-0#switch-from-capbridge-to-applicationdelegateproxy-in-application-events) in application events
- remove the whole onCreate initialization from your app's `MainActivity.java`

```diff
 public class MainActivity extends BridgeActivity {
-    @Override
-    public void onCreate(Bundle savedInstanceState) {
-        super.onCreate(savedInstanceState);
-
-        // Initializes the Bridge
-        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
-            // Additional plugins you've installed go here
-            add(IntercomPlugin.class);
-        }});
-    }
 }
```

## License

MIT

## Example

- https://github.com/capacitor-community/intercom/blob/master/example

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/stewones"><img src="https://avatars1.githubusercontent.com/u/719763?v=4?s=75" width="75px;" alt="Stew"/><br /><sub><b>Stew</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=stewones" title="Code">💻</a> <a href="https://github.com/capacitor-community/intercom/commits?author=stewones" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davidseek.com/"><img src="https://avatars2.githubusercontent.com/u/17073950?v=4?s=75" width="75px;" alt="David Seek"/><br /><sub><b>David Seek</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=davidseek" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rnikitin"><img src="https://avatars3.githubusercontent.com/u/1829318?v=4?s=75" width="75px;" alt="Roman Nikitin"/><br /><sub><b>Roman Nikitin</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=rnikitin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/atomassoni"><img src="https://avatars1.githubusercontent.com/u/17362459?v=4?s=75" width="75px;" alt="Anne Tomassoni"/><br /><sub><b>Anne Tomassoni</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=atomassoni" title="Code">💻</a> <a href="https://github.com/capacitor-community/intercom/pulls?q=is%3Apr+reviewed-by%3Aatomassoni" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mmodzelewski"><img src="https://avatars2.githubusercontent.com/u/7762633?v=4?s=75" width="75px;" alt="Maciej Modzelewski"/><br /><sub><b>Maciej Modzelewski</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=mmodzelewski" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/spaghettiguru"><img src="https://avatars.githubusercontent.com/u/5624009?v=4?s=75" width="75px;" alt="Oleg Yuzvik"/><br /><sub><b>Oleg Yuzvik</b></sub></a><br /><a href="#maintenance-spaghettiguru" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gcorreaalves"><img src="https://avatars.githubusercontent.com/u/983426?v=4?s=75" width="75px;" alt="Gustavo Corrêa Alves"/><br /><sub><b>Gustavo Corrêa Alves</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=gcorreaalves" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jealvia"><img src="https://avatars.githubusercontent.com/u/28424830?v=4?s=75" width="75px;" alt="Jealvia"/><br /><sub><b>Jealvia</b></sub></a><br /><a href="#maintenance-Jealvia" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://adamduren.com/"><img src="https://avatars.githubusercontent.com/u/581097?v=4?s=75" width="75px;" alt="Adam Duren"/><br /><sub><b>Adam Duren</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=adamduren" title="Code">💻</a> <a href="#maintenance-adamduren" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ramikhafagi96"><img src="https://avatars.githubusercontent.com/u/38646828?v=4?s=75" width="75px;" alt="Rami Khafagi"/><br /><sub><b>Rami Khafagi</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=ramikhafagi96" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rdlabo.jp/"><img src="https://avatars.githubusercontent.com/u/9690024?v=4?s=75" width="75px;" alt="Masahiko Sakakibara"/><br /><sub><b>Masahiko Sakakibara</b></sub></a><br /><a href="#maintenance-rdlabo" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/camdjn"><img src="https://avatars.githubusercontent.com/u/7116085?v=4?s=75" width="75px;" alt="Dejardin Camille"/><br /><sub><b>Dejardin Camille</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=camdjn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://scr2em.github.io/portfolio/"><img src="https://avatars.githubusercontent.com/u/4671486?v=4?s=75" width="75px;" alt="Mohamed Abdelgwad"/><br /><sub><b>Mohamed Abdelgwad</b></sub></a><br /><a href="#maintenance-scr2em" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shark404"><img src="https://avatars.githubusercontent.com/u/4898049?v=4?s=75" width="75px;" alt="Nathan"/><br /><sub><b>Nathan</b></sub></a><br /><a href="#maintenance-shark404" title="Maintenance">🚧</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://cwoebker.com/"><img src="https://avatars.githubusercontent.com/u/885085?v=4?s=75" width="75px;" alt="Cecil Wöbker"/><br /><sub><b>Cecil Wöbker</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=cwoebker" title="Code">💻</a> <a href="#maintenance-cwoebker" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pavloPyrig0"><img src="https://avatars.githubusercontent.com/u/10965335?v=4?s=75" width="75px;" alt="Pavlo Pyrig"/><br /><sub><b>Pavlo Pyrig</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=pavloPyrig0" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dupiesdupreez"><img src="https://avatars.githubusercontent.com/u/6910085?v=4?s=75" width="75px;" alt="Ruan"/><br /><sub><b>Ruan</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=dupiesdupreez" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/RickJeroen"><img src="https://avatars.githubusercontent.com/u/15357844?v=4?s=75" width="75px;" alt="RickJeroen"/><br /><sub><b>RickJeroen</b></sub></a><br /><a href="#maintenance-RickJeroen" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://t.me/reslear"><img src="https://avatars.githubusercontent.com/u/12596485?v=4?s=75" width="75px;" alt="reslear"/><br /><sub><b>reslear</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=reslear" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/pmatter"><img src="https://avatars.githubusercontent.com/u/35367833?v=4?s=75" width="75px;" alt="Philipp Matter"/><br /><sub><b>Philipp Matter</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=pmatter" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jpike88"><img src="https://avatars.githubusercontent.com/u/9585787?v=4?s=75" width="75px;" alt="Josh Pike"/><br /><sub><b>Josh Pike</b></sub></a><br /><a href="#maintenance-jpike88" title="Maintenance">🚧</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vtorenaintermedia"><img src="https://avatars.githubusercontent.com/u/128741423?v=4?s=75" width="75px;" alt="vtorenaintermedia"/><br /><sub><b>vtorenaintermedia</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=vtorenaintermedia" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
