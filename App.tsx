import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import {Image, StyleSheet, Text, Vibration, View, useAnimatedValue} from 'react-native';
import SmsReq from './components/SmsReq';
import SplashScreen from './screens/SplashScreen';
import MobileVerification from './screens/MobileVerification';
import Question1 from './screens/Questions/Question1';
import Question2 from './screens/Questions/Question2';
import Home from './screens/Home';
import Details from './screens/Details';

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
              // options={{headerShown: false}}
              options={{
                title: 'Sign Up',
                headerTitle:()=>(
                  <>
                  <Image source={require('./components/assets/img1.png')} style={styles.img}></Image>
                  <Text style={styles.text}> FinCraft</Text>
                  </>
                ),
                headerStyle: {
                  backgroundColor: 'black', // header background colour
                },
                headerTintColor: 'green', // header font colour
                headerTitleStyle:{
                  fontSize:25
                }
              }}
            />
            <Stack.Screen
              name="MobileVerification"
              component={MobileVerification}
              options={{headerShown: false}}
            />
            <Stack.Screen
            name="Question1"
            component={Question1}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Question2"
            component={Question2}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Home1"
            component={Home}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="DetailsPg"
            component={Details}
            options={{headerShown:false}}
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

const styles= StyleSheet.create({
  img:{
    height:40,
    width:40
  },
  text:{
    fontFamily:'',
    // color:'#26d8fc',
    // color:'#2e9675',
    color:'white',
    fontWeight:'bold', 
    fontSize:24
  },
})
export default App;
