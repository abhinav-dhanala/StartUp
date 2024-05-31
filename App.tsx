import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import {Vibration, View, useAnimatedValue} from 'react-native';
import SmsReq from './components/SmsReq';
import SplashScreen from './components/SplashScreen';

enableScreens();

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [isSplash, setisSplash] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setisSplash(false);
    },3000);
  });
  
  return (
    <>
      {
        isSplash?<SplashScreen/>:
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={LoginPage}
              options={{headerShown: false}} // Hide header for LoginPage
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpPage}
              options={{headerShown: false}} // Hide header for SignUpPage
            />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>
    // <>
    // <SplashScreen/>
    // </>
  );
};

export default App;
