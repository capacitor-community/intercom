package com.getcapacitor.community.intercom;

import androidx.annotation.NonNull;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import java.util.Map;
import io.intercom.android.sdk.push.IntercomPushClient;

public class MessagingService extends FirebaseMessagingService {
    private final IntercomPushClient intercomPushClient = new IntercomPushClient();

    @Override public void onNewToken(@NonNull String refreshedToken) {
        IntercomPlugin.onNewToken(refreshedToken, intercomPushClient);
        super.onNewToken(refreshedToken);
    }

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Map<String, String> message = remoteMessage.getData();
        if (intercomPushClient.isIntercomPush(message)) {
            IntercomPlugin.sendRemoteMessage(message, intercomPushClient);
        } else {
            super.onMessageReceived(remoteMessage);
        }
    }
}
