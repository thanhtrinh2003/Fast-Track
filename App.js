import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import LoginPage from './components/LoginPage';
import Map from './components/Map';
import RegistrationPage from './components/RegistrationPage';
import {NavigationContainer} from '@react-navigation/native';
import { View, Button, Text, SafeAreaView } from 'react-native';


// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize("WxgJ1NyL9Smyl1setR50X1GInxxfSNUcyQMvHOuo", "mLkmRkWcDQAiRcKTdzQtuXD5e7YPjIGwOHQsGnpx");
Parse.serverURL = 'https://parseapi.back4app.com/';


const App = () => {

  const [navigationShow, enableNavigation] = useState(false);

  if (navigationShow) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    )
  } else {
    return (
      <RegistrationPage onSubmit={enableNavigation}/>
    )
  }
    
}





export default App;


