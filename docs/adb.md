# ADB

List devices:

```
adb devices
```

Log error on device:

```
adb -s "deviceId" logcat *:E
```

Build apk to real device:

```
adb install android/app/build/outputs/apk/release/app-release.apk
```

Note: Fix error https://github.com/facebook/react-native/issues/27157

``` 
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
```