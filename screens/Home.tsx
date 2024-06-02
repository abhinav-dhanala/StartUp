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
              // source={require('../components/assets/Cart.png')}
            />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Hello, <Text style={styles.title2}>Banda Aakash</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profilePicContainer}
            onPress={() => navigation.navigate('ProfilePage')}>
            <Image
              style={styles.profilePic}
              source={require('../components/assets/Cart.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.label}>Invested Amount</Text>
          <Text style={styles.balance}>₹2423</Text>
          <Text style={styles.label}>Current Amount</Text>
          <Text style={styles.investedAmount}>₹12,321</Text>
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
              // source={require('../components/assets/Bank2.png')}
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

        <View style={styles.statsContainer}>
          <TouchableOpacity
            style={styles.statBox}
            onPress={() => {
              console.log('P2P');
            }}>
            <Image
              source={require('../components/assets/P2P.png')}
              style={styles.image}></Image>
            <Text style={styles.font}>P2P</Text>
            <Text>
              Start investing in{' '}
              <Text style={{fontWeight: 'bold', color: 'gold'}}>P2P</Text> with
              a minimum of ₹10
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
              source={require('../components/assets/Expenses.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}>Expenses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statBox2}
            onPress={() => {
              console.log('Gold');
            }}>
            <Image
              source={require('../components/assets/budget.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}>   Goal Savings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statBox2}
            onPress={() => {
              console.log('Mutual Funds');
            }}>
            <Image
              source={require('../components/assets/calculator.png')}
              style={styles.image}></Image>
            <Text style={styles.font2}>      SIP Calculator</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headings}>Setup Automatic Savings</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollView}>
          <View style={styles.horizontalContainer}>
            <TouchableOpacity
              style={styles.statBox3}
              onPress={() => {
                console.log('RoundOff');
              }}>
              <Image
                source={require('../components/assets/moneyBag.png')}
                style={styles.image}></Image>
              <Text style={styles.font3}>Round Off</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statBox3}
              onPress={() => {
                console.log('Daily');
              }}>
              <Image
                source={require('../components/assets/daily.png')}
                style={styles.image}></Image>
              <Text style={styles.font3}>Daily Savings</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statBox3}
              onPress={() => {
                console.log('Weekly');
              }}>
              <Image
                source={require('../components/assets/week.png')}
                style={styles.image}></Image>
              <Text style={styles.font3}>Weekly Savings</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.statBox3}
              onPress={() => {
                console.log('Monthly');
              }}>
              <Image
                source={require('../components/assets/monthly.png')}
                style={styles.image}></Image>
              <Text style={styles.font3}>Monthly Savings</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <View style={styles.bcontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SmsReq')}
            style={styles.button}>
            <Text style={{color: 'white'}}>Read SMS</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
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
    backgroundColor: '#121313',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 8,
    padding: 20,
    margin: 16,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '300',
    paddingBottom: 10,
  },
  balance: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  investedAmount: {
    fontSize: 32,
    color: '#1CC099',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:0,
    margin: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  horizontalScrollView: {
    marginTop: 20,
  },
  statBox: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  statBox2: {
    width: '32%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statBox3: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 53,
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
  font3: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  headings: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
    marginBottom: 20,

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
