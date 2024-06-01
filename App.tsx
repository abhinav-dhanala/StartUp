import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import LoginPage from './screens/LoginPage';
import { Image, StyleSheet, Text } from 'react-native';
import SmsReq from './components/SmsReq';
import SplashScreen from './screens/SplashScreen';
import MobileVerification from './screens/MobileVerification';
import Question1 from './screens/Questions/Question1';
import Question2 from './screens/Questions/Question2';
import Home from './screens/Home';
import Details from './screens/Details';
import ProfilePage from './screens/ProfilePage';

enableScreens();
const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={LoginPage} options={{
                title: 'Sign Up',
                headerTitle: () => (
                  <>
                    <Image source={require('./components/assets/img1.png')} style={styles.img} />
                    <Text style={styles.text}> FinCraft</Text>
                  </>
                ),
                headerStyle: {
                  backgroundColor: 'black',
                },
                headerTintColor: 'green',
                headerTitleStyle: {
                  fontSize: 25,
                },
              }}
            />
            <Stack.Screen name="MobileVerification" component={MobileVerification} options={{ headerShown: false }} />
            <Stack.Screen name="Question1" component={Question1} options={{ headerShown: false }} />
            <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }}/>
            <Stack.Screen name="Home1" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="DetailsPg" component={Details} options={{ headerShown: false }}/>
            <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }}/>
            <Stack.Screen name="SmsReq" component={SmsReq} options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default App;
