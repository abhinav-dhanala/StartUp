import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter Your Mobile Number</Text>
        <TextInput placeholder="Mobiule Number" style={styles.input} placeholderTextColor={'gray'} keyboardType='numeric' />
        {/* <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} placeholderTextColor={'gray'}/> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28a745', marginTop: 10 }]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop:20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'rgb(255,255,255)',
  },
  input: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color:'black'
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
