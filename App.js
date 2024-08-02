import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; 
import OrderScreen from './OrderScreen';
import InboxScreen from './InboxScreen'; 
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const BottomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Home')}>
        <Image source={require('./assets/icon-home.png')} style={styles.navImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Order')}>
        <Image source={require('./assets/icon-order.png')} style={styles.navImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Inbox')}>
        <Image source={require('./assets/icon-indox.png')} style={styles.navImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('./assets/icon-profile.png')} style={styles.navImage} />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen style={styles.Layer} name="Home" component={HomeScreen} />
          <Stack.Screen style={styles.Layer} name="Order" component={OrderScreen} />
          <Stack.Screen style={styles.Layer} name="Inbox" component={InboxScreen} />
          <Stack.Screen style={styles.Layer} name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        <BottomNavigationBar/>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    zIndex: 3,
  },
  Layer : {
  zIndex: 2
  },
  navIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navImage: {
    width: 29,
    height: 36,
  },
});

export default App;
