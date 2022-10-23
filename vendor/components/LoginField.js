import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {max} from 'react-native-reanimated';

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
      <TouchableOpacity style={styles.logButton}>
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
    marginTop: '15%',
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
