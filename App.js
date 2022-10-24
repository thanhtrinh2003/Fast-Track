import React, { useState } from 'react';
import Tabs from './components/Tabs';
import RegistrationPage from './components/RegistrationPage';
import { NavigationContainer } from '@react-navigation/native';

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