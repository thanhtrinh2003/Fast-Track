import React from 'react';

import { Image } from 'react-native';

const PageHeader = () => {
    return (
      <Image
        style={{width: 42, height: 42, marginTop: 45}}
        source={require("../assets/Logo.png")}
      />
    );
}

export default PageHeader;