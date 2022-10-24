import React from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';

import  "../back4app/id";

// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';



//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize("WxgJ1NyL9Smyl1setR50X1GInxxfSNUcyQMvHOuo", "mLkmRkWcDQAiRcKTdzQtuXD5e7YPjIGwOHQsGnpx");
Parse.serverURL = 'https://parseapi.back4app.com/';



const LoginField = () => {
  const [email, onChangeEmail] = React.useState('Email');
  const [password, onChangePass] = React.useState('Password');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.forget}>Forget Password?</Text>
      <TouchableOpacity style={styles.logButton} onPress = {async () => {
          //fetch the data
      }}>
        <Text style={styles.logText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: '7%',
    width: 240,
    padding: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#10551F55',
  },
  forget: {
    textAlign: 'right',
    marginTop: 3,
  },
  logButton: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '8%',
    backgroundColor: '#2E6D18',
    borderRadius: 25,
    height: 30,
    width: 175,
  },
  logText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LoginField;
