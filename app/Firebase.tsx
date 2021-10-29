import React, {useEffect} from 'react';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

const Firebase = () =>
{
  const showNotification = (
    notification: FirebaseMessagingTypes.Notification,
  ) => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body!,
    });
  };
  useEffect(() => {
    firebase
      .messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(token => console.log(token))
      .catch(e => console.log(e));
    firebase.messaging().onMessage(response => {
      console.log(JSON.stringify(response));
      if (Platform.OS === 'ios') {
        PushNotificationIOS.requestPermissions().then(
          showNotification(response.notification!),
        );
      } else {
        showNotification(response.notification!);
      }
    });
  }, []);
  return <></>;
};
export default Firebase;