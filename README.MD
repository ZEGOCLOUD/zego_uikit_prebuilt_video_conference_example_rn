# Overview

`Video Conference Kit` is a prebuilt feature-rich component, which enables you to build video conferences into your app in minutes.

And it includes the business logic with the UI, you can add or remove features accordingly by customizing UI components.

|First comer's view| Later comer's view|
|---|---|
|<img src="https://user-images.githubusercontent.com/5242852/197192278-b58cf3eb-1db1-4186-9120-2ad329f9514c.gif"  width=50%>|<img src="https://user-images.githubusercontent.com/5242852/197192254-21e394b0-5d99-42fa-92fd-e1f0d87bc9cd.gif"  width=53%>|


## When do you need the Video Conference Kit

- Build apps faster and easier
> - Want to prototype video conferences ASAP
> - Consider speed or efficiency as the top priority
> - Video Conference Kit allows you to integrate in minutes
- Customize UI and features as needed
> - Want to customize features based on actual business needs
> - Less time wasted developing basic features
> - Video Conference Kit includes the business logic along with the UI, allows you to customize features accordingly


## Embedded features

- Multi-user audio/video conferences
- Adaptive video layouts
- Real-time sound waves display
- Customizable UI styles
- Device management
- Extendable top/bottom menu bar
- Customizable conference title
- Member list
- Live text chat (coming soon)
- Conference join/leave notifications (coming soon)

- - -

# Quick start

## Integrate the SDK

### Import the SDK

1. Add the @zegocloud/zego-uikit-prebuilt-video-conference-rn as dependencies.

```bash
yarn add @zegocloud/zego-uikit-prebuilt-video-conference-rn
```

OR

```bash
npm install @zegocloud/zego-uikit-prebuilt-video-conference-rn
```

1. Add other dependencies.

Run the following command to install other dependencies for making sure the `@zegocloud/zego-uikit-prebuilt-video-conference-rn` can work properly:

```bash
yarn add @zegocloud/zego-uikit-rn react-delegate-component zego-express-engine-reactnative
```

OR

```bash
npm install @zegocloud/zego-uikit-rn react-delegate-component zego-express-engine-reactnative
```

### Using the ZegoUIKitPrebuiltVideoConference component in your project

- Go to [ZEGOCLOUD Admin Console](https://console.zegocloud.com/), get the `appID` and `appSign` of your project.
- Specify the `userID` and `userName` for connecting the Video Conference Kit service.
- Create a `conferenceID` that represents the video conference you want to start.


```js
// App.js
import React, { Component } from 'react';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'

export default function VideoConferencePage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltVideoConference
                appID={yourAppID}
                appSign={yourAppSign}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                conferenceID={conferenceID} // conferenceID can be any unique string. 

                config={{
                    onLeave: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}
```


## Configure your project

- Android: 

1. Open the `my_project/android/app/src/main/AndroidManifest.xml` file and add the following:

<img src="https://user-images.githubusercontent.com/5242852/188270423-19fd9e83-f588-4599-b365-fdfa3ac39898.gif" width=500/>

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.CAMERA" />
```

1. Open `my_project/android/app/proguard-rules.pro` file and add the following:

<img src="https://user-images.githubusercontent.com/5242852/197194700-e131ae73-0d7b-409a-94a5-bcd3d4b8035b.jpeg" width=500/>
  
  
```xml
-keep class **.zego.**  { *; }
```



- iOS:

    Open the `my_project/ios/my_project/Info.plist` file and add the following:

    <img src="https://user-images.githubusercontent.com/5242852/188270427-6b4638bb-d0f2-483d-b43a-179e7490cf06.gif" width=500/>

    ```xml
    <key>NSCameraUsageDescription</key>
    <string>We need to use the camera</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>We need to use the microphone</string>
    ```

## Run & Test

If your device is not performing well or you found a UI stuttering, run in **Release mode** for a smoother experience.


- Run on an iOS device:

```bash
yarn ios
```

OR

```bash
npm run ios
```

- Run on an Android device:

```bash
yarn android
```

OR

```bash
npm run android
```


## Related guide

- [Custom prebuilt UI](https://docs.zegocloud.com/article/14938)
- [Sample code](https://github.com/ZEGOCLOUD/-zego_uikit_prebuilt_video_conference_example_rn)

