import React from 'react';

import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';

import LoginField from './LoginField';

const LoginPage = () => {
  return (
    <View style={styles.screenStyle}>
      <ImageBackground
        source={require('../assets/LoginBackground.png')}
        style={styles.background}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.motto}>Skip Line, Get Food</Text>
        <Text style={styles.login}>Login</Text>
        <LoginField />
        <Text style={styles.register}>
          <Text>Don't have an account? </Text>
          <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  motto: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '7%',
  },
  login: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: '45%',
  },
  logo: {
    height: 100,
    resizeMethod: 'scale',
    resizeMode: 'contain',
    marginTop: '50%',
  },
  screenStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  register: {
    fontSize: 12,
    marginBottom: -100,
  },
});

export default LoginPage;
