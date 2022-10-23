import React from 'react';

import Home from './Home';
import Map from './Map';
import Store from './Store';
import Profile from './Profile';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveBackgroundColor: '#D7DBD8',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: styles.textStandard,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/HomeMenuIcon.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabelStyle: styles.textStandard,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/MapMenuIcon.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabelStyle: styles.textStandard,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/StoreMenuIcon.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: styles.textStandard,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/ProfileMenuIcon.png')}
              style={styles.tinyLogo}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    height: 22,
    resizeMethod: 'scale',
    resizeMode: 'contain',
  },
  textStandard: {
    color: 'black',
    marginBottom: 3,
    justifyContent: 'center',
    fontSize: 13,
  },
});

export default Tabs;
