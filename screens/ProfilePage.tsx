import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>ProfilePage</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    // justifyContent:'center',
  },
  container: {
    margin:10
  },
  heading: {
    fontSize:25,
    color:'white',
    fontWeight:'500'
  },
});
