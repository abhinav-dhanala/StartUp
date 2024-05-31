import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, PermissionsAndroid, Alert, Platform } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const checkAndRequestPermissions = async () => {
      if (Platform.OS === 'android') {
        const hasPermission = await requestSMSPermissions();
        if (hasPermission) {
          console.log("Starting to read SMS at intervals");
          const interval = setInterval(readSMS, 5000); // Fetch messages every 5 seconds
          return () => clearInterval(interval);
        }
      }
    };
    checkAndRequestPermissions();
  }, []);

  const requestSMSPermissions = async () => {
    try {
      console.log("Requesting SMS permissions");
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
      ]);

      console.log('Permissions granted status:', granted);

      if (
        granted['android.permission.READ_SMS'] === PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.RECEIVE_SMS'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('SMS permissions granted');
        return true;
      } else {
        console.log('SMS permissions denied');
        Alert.alert(
          'Permissions required',
          'This app requires SMS permissions to read messages. Please enable them in the app settings.',
          [{ text: 'OK' }]
        );
        return false;
      }
    } catch (err) {
      console.error('Error requesting SMS permissions:', err);
      return false;
    }
  };

  const readSMS = () => {
    console.log("Reading SMS");
    SmsAndroid.list(
      JSON.stringify({
        box: 'inbox',
        maxCount: 1, // Retrieve only one message (the latest one)
      }),
      (fail) => {
        console.error('Failed to get messages:', fail);
      },
      (count, smsList) => {
        console.log('SMS List:', smsList);
        const parsedSmsList = JSON.parse(smsList);
        if (parsedSmsList.length > 0) {
          const latestMessage = parsedSmsList[0]; // Get the first (latest) message
          console.log('Latest message:', latestMessage);
          setMessages([latestMessage]);
          // saveToBackend(latestMessage); // Save the latest message to the backend
        } else {
          setMessages([]);
        }
      },
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>SMS Reader App</Text>
      {messages.length > 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 1, paddingVertical: 10 }}>
              <Text>From: {item.address}</Text>
              <Text>Body: {item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No messages</Text>
      )}
    </View>
  );
};

export default App;