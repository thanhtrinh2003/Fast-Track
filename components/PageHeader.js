import React from 'react';

import { Image } from 'react-native';

export default function PageHeader() {
    return (
      <Image
        style={{width: 42, height: 42, marginTop: 45}}
        source={require("../assets/Logo.png")}
      />
    );
  }