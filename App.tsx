import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

enableScreens();

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LoginPage}
          options={{ headerShown: false }} // Hide header for LoginPage
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ headerShown: false }} // Hide header for SignUpPage
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
