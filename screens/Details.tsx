import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

function Details() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Your full Name</Text>
        <Text style={styles.title2}>First Name</Text>

        <TextInput style={styles.input}></TextInput>
        <Text style={styles.title2}>Middle Name</Text>

        <TextInput style={styles.input}></TextInput>
        <Text style={styles.title2}>Last Name</Text>
        <TextInput style={styles.input}></TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Question1');
          }}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    //   justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  container: {
    marginTop: 30,
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
    // fontFamily:'American Typewriter',
  },
  title2: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    marginTop: 10,
    // fontFamily:'American Typewriter',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: 'white',
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#0080ff',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Details;
