import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native';

const LoginPage: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.background}>
      <View style={styles.container}>

        <View style={{alignItems: 'center'}}>
          <Image source={require('../components/assets/login.png')} style={{width:360,height:200,marginTop:10}}>
          </Image>
        </View>
        <Text style={styles.title}>Login/Signup</Text>
        <TextInput 
          placeholder="Mobile Number" 
          style={styles.input} 
          placeholderTextColor={'gray'} 
          keyboardType='numeric' 
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MobileVerification')}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  container: {
    // backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 20,
    // borderRadius: 10,
    width: '100%',
  },
  title: {
    marginTop:20,
    fontSize: 20,
    marginBottom: 20,
    color: 'rgb(255,255,255)',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'black'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginPage;
