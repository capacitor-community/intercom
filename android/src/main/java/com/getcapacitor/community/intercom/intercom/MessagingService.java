package com.getcapacitor.community.intercom.intercom;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

import io.intercom.android.sdk.push.IntercomPushClient;

public class MessagingService extends FirebaseMessagingService {
    private final IntercomPushClient intercomPushClient = new IntercomPushClient();
    @Override
    public void onMessageReceived(RemoteMessage message) {
        Map messageData = message.getData();
        if (intercomPushClient.isIntercomPush(messageData)) {
            intercomPushClient.handlePush(getApplication(), messageData);
        } else {
            super.onMessageReceived(message);
        }
    }

    @Override
    public void onNewToken(@NonNull String s) {
        super.onNewToken(s);
        intercomPushClient.sendTokenToIntercom(this.getApplication(), s);
    }
}
