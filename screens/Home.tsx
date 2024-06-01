import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [hasIconTriggered, setHasIconTriggered] = useState(false);

  useEffect(() => {
    // Add your animation setup code here if needed
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profilePicContainer}
            onPress={() => navigation.navigate('ProfilePage')}>
            <Image
              style={styles.profilePic}
              source={{
                uri: 'https://images.unsplash.com/photo-1520626337972-ebf863448db6',
              }}
            />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Hello, <Text style={styles.title2}>Banda Aakash</Text>
            </Text>
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.label}>Available Balance</Text>
          <Text style={styles.balance}>₹2423</Text>
          <Text style={styles.label}>Invested Amount</Text>
          <Text style={styles.investedAmount}>₹12,321</Text>
          <Text style={styles.label}>Growth</Text>
        </View>

        <Text style={styles.headings}>Invest Manually</Text>

        <View style={styles.statsContainer}>
          <TouchableOpacity
            style={styles.statBox}
            onPress={() => {
              console.log('Gold');
            }}>
            <Image
              source={require('../components/assets/gold.png')}
              style={styles.image}></Image>
            <Text style={styles.font}>Gold</Text>
            <Text>
              Start investing in{' '}
              <Text style={{fontWeight: 'bold', color: 'gold'}}>Gold</Text> with
              a minimum of ₹10
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statBox}
            onPress={() => {
              console.log('Mutual Funds');
            }}>
            <Image
              source={require('../components/assets/money.png')}
              style={styles.image}></Image>
            <Text style={styles.font}>Mutual Funds</Text>
            <Text>
              Start investing in{' '}
              <Text style={{fontWeight: 'bold', color: 'gold'}}>
                Mutual Funds
              </Text>{' '}
              with a minimum of ₹10
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headings}>Quick Services</Text>

        <View style={styles.statsContainer}>
          <TouchableOpacity
            style={styles.statBox2}
            onPress={() => {
              console.log('Expenses');
            }}>
            <Image
              source={require('../components/assets/gold.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}> Expenses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statBox2}
            onPress={() => {
              console.log('Gold');
            }}>
            <Image
              source={require('../components/assets/gold.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}>Gold</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statBox2}
            onPress={() => {
              console.log('Mutual Funds');
            }}>
            <Image
              source={require('../components/assets/money.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}>Mutual Funds</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SmsReq')}
            style={styles.button}>
            <Text style={{color: 'white'}}>Read SMS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: '#121313',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },

  // iconButton: {
  //   backgroundColor: 'transparent',
  //   borderRadius: 30,
  //   padding: 10,
  // },

  titleContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 0,
  },
  title2: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 0,
  },
  profilePicContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  balanceContainer: {
    // backgroundColor: 'rbga(0,0,0,1)',
    backgroundColor: '#1c1e1e',
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
    margin: 16,
  },
  label: {
    // color: '#0075A3',
    color: '#1CC099',
    // color: '#64D2FF',
    // color:'#3A3A3C',
    // color: 'gold',
    fontSize: 15,
    paddingBottom: 2,
  },
  balance: {
    fontSize: 32,
    color: '#FFFFFF',
    // color: '#CF553A',  //red
  },
  investedAmount: {
    fontSize: 32,
    // color:'gold'
    // color: '#02fff3', //teal
    color: '#1CC099', //grgreen
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  statBox: {
    width: '48%',
    // backgroundColor: '#2E2E2E',
    // backgroundColor: '#0D0D0D',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Yellow with 0% opacity
    // borderColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    // alignItems: 'center',
  },
  statBox2: {
    width: '32%',
    // backgroundColor: '#2E2E2E',
    // backgroundColor: '#0D0D0D',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Yellow with 0% opacity
    // borderColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    // alignItems: 'center',
  },
  statLabel: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  font: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  font2: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  headings: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#0080ff',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bcontainer: {
    margin: 20,
  },
});

export default HomePage;
