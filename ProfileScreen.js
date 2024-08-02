import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigation = useNavigation();

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <LinearGradient colors={['rgba(230, 230, 230, 0)', '#FEFFBF']} style={styles.topBackground} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Image source={require('./assets1/back-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <Image source={require('./assets2/avata.png')} style={styles.avatar} />
      <LinearGradient
        colors={['rgba(230, 230, 230, 0)', '#FEFFBF']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.scrollGradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.profileHeader}>
            <Text style={styles.name}>Rakibul Hasan</Text>
            <Text style={styles.email}>rakibhbrand@gmail.com</Text>
          </View>
          <View style={styles.menuContainer}>
            <MenuItem icon={require('./assets2/home-icon.png')} label="Home" />
            <MenuItem icon={require('./assets2/Mycard-icon.png')} label="My Card" />
            <View style={styles.menuItem}>
              <Image source={require('./assets2/darkmood-icon.png')} style={styles.menuIcon} />
              <Text style={styles.menuLabel}>Dark Mode</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleDarkMode}
                value={darkMode}
                style={styles.switch}
              />
            </View>
            <MenuItem icon={require('./assets2/location-icon.png')} label="Track Your Order" />
            <MenuItem icon={require('./assets2/setting-icon.png')} label="Settings" />
            <MenuItem icon={require('./assets2/help-icon.png')} label="Help Center" />
          </View>
          <TouchableOpacity style={styles.logoutButton}>
            <Image source={require('./assets2/logout-icon.png')} style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 179,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  backIcon: {
    width: 17,
    height: 10,
  },
  headerText: {
    position: 'absolute',
    top: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   topBackground: {
    position: 'absolute',
    width: '100%',
    height: 179,
    borderRadius: 33,
    top: 0,
    left: 0,
    right: 0,
    overflow:'hidden'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -65, // Adjust the margin to overlap the ScrollView
    zIndex: 1,
  },
  scrollGradient: {
    flex: 1,
    borderTopLeftRadius: 33,
    borderTopRightRadius: 33,
    marginTop: -50, // Adjust the margin to overlap the header
    paddingTop: 75, // Adjust the padding to accommodate the avatar
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  profileHeader: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuLabel: {
    fontSize: 16,
  },
  switch: {
    marginLeft: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#4A43EC',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  logoutIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
