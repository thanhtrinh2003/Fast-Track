import React from 'react';

import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';

import RegistrationField from './RegistrationField';

const RegistrationPage = (props) => {
  return (
    <View style={styles.screenStyle}>
      <ImageBackground
        source={require('../assets/LoginBackground.png')}
        style={styles.background}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.motto}>Skip Line, Get Food</Text>
        <Text style={styles.login}>Registration</Text>
        <RegistrationField onSubmit={props.onSubmit}/>
        <Text style={styles.register}>
          <Text>Already have an account? </Text>
          <Text style={{fontWeight: 'bold'}}>Sign In</Text>
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
    marginTop: '40%',
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
    marginTop: 10
  },
});

export default RegistrationPage;
