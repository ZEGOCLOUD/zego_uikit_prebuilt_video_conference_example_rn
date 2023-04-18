import React, { useEffect } from 'react';
import { Alert } from 'react-native';

import { StyleSheet, View, Text, Button } from 'react-native';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn'
import KeyCenter from "../KeyCenter";

export default function VideoConferencePage(props) {
    const { route } = props;
    const { params } = route;
    const { userID, userName, conferenceID } = params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltVideoConference
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                conferenceID={conferenceID}

                config={{
                    onLeave: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});
