import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const MobileVerification: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    navigation.navigate('DetailsPg')
    console.log('OTP entered:', otp);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Enter OTP</Text>
        <TextInput
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:'center',

    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MobileVerification;
