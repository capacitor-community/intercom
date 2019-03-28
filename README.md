# capacitor-intercom

> Notice: this plugin was adapted from the [official one](https://github.com/intercom/intercom-cordova) and doesn't follow the official capacitor plugin format just because it still working nice as a cordova plugin. PR welcomed.

# Setup

`npm install --save capacitor-intercom`

# Android

add to your app `android/app/src/main/res/xml/config.xml`

```
// ...
    <preference name="intercom-app-id" value="xxx" />
    <preference name="intercom-android-api-key" value="zzz" />
// ...
</widget>
```

# iOS

add to your app `Info.plist`

```
	<key>IntercomApiKey</key>
	<string>xxx</string>
	<key>IntercomAppId</key>
	<string>yyy</string>
```

add to your `AppDelegate.swift` class

```


```

# License

MIT
