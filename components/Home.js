import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native';

import HomeSearchBar from './HomeSearchBar';

const Home = () => {
  return (
    <View style={styles.main}>
      <ImageBackground source={require("../assets/HomePageCheat.png")} style={{height: 200, width: '100%', resizeMode: "contain"}}>
        <HomeSearchBar />
      </ImageBackground>
      
      <ScrollView style={{width: '100%', marginTop: 15}}>
          <Image style={styles.img} source={require("../assets/Businesses/BlueDonkey.png")} />
          <Image style={styles.img} source={require("../assets/Businesses/WreckStop.png")} />
          <Image style={styles.img} source={require("../assets/Businesses/ClucknMooh.png")} />
          <Image style={styles.img} source={require("../assets/Businesses/Brittain.png")} />
          <Image style={styles.img} source={require("../assets/Businesses/Willage.png")} />
          <Image style={styles.img} source={require("../assets/Businesses/NorthAve.png")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: "white"
    
  },
  img: {
    width: '90%',
    resizeMode: "contain",
    alignSelf: "center"
  }
});

export default Home;
