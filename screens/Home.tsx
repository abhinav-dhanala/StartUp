import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('IconButton pressed ...')}>
            <Icon name="menu" size={31} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.title2}>Banda Aakash</Text>
          </View>

          <TouchableOpacity style={styles.profilePicContainer} onPress={() => navigation.navigate('MY_profilePage')}>
            <Image
              style={styles.profilePic}
              source={{ uri: 'https://images.unsplash.com/photo-1520626337972-ebf863448db6' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.label}>Available Balance</Text>
          <Text style={styles.balance}>₹2423</Text>
          <Text style={styles.label}>Invested Amount</Text>
          <Text style={styles.investedAmount}>₹12,321</Text>
          <Text style={styles.label}>Growth</Text>
          <View style={styles.growthContainer}>
            <Text style={styles.growth}>4.5%</Text>
            <Icon name="trending-up" size={24} color="#32CD32" />
          </View>
        </View>
        <View style={styles.alertContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>1 New Alert</Text>
          </View>
          <View style={styles.alertRow}>
            <Icon name="notifications" size={24} color="#FFFFFF" />
            <Text style={styles.alertLabel}>Fraud Alert</Text>
          </View>
          <Text style={styles.alertDescription}>We noticed a small charge that...</Text>
          <TouchableOpacity>
            <Text style={styles.viewNow}>View Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Icon name="savings" size={36} color="#FFFFFF" />
            <Text style={styles.statLabel}>Expenses</Text>
          </View>
          <View style={styles.statBox}>
            <Icon name="group" size={36} color="#FFFFFF" />
            <Text style={styles.statLabel}>Group Savings</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconButton: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    padding: 10,
  },

  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 0,
  },
  title2: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginTop: 0,
  },
  profilePicContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  balanceContainer: {
    // backgroundColor: 'rbga(0,0,0,1)',
    marginTop:80,
    backgroundColor: '#1c1e1e',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  label: {
    color: '#0075A3',
    // color: '#64D2FF',
    // color:'#3A3A3C',
    // color: 'gold',
    fontSize: 12,
  },
  balance: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  investedAmount: {
    fontSize: 32,
    color: '#02fff3',
  },
  growthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  growth: {
    fontSize: 16,
    color: '#32CD32',
  },
  alertContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  alertBox: {
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    padding: 16,
  },
  alertText: {
    color: '#32CD32',
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  alertLabel: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
  alertDescription: {
    color: '#98FFFFFF',
    fontSize: 12,
    padding: 16,
  },
  viewNow: {
    color: '#32CD32',
    padding: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  statBox: {
    width: '48%',
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  statLabel: {
    color: '#FFFFFF',
    marginTop: 8,
  },
});

export default HomePage;
