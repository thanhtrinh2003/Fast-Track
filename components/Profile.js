import React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native';

const Profile = () => {
  return (
    <View>
      <Image source={require("../assets/ProfileBanner.png")} style={styles.profileBanner}></Image>
      <Text style={styles.sectionTitle}>Email</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>coolguy@gmail.com</Text>
      </View>
      <Text style={styles.sectionTitle}>Total Crowd Reports</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>0</Text>
      </View>
      <Text style={styles.sectionTitle}>Favorites</Text>
      <Image source={require("../assets/FavoritesBar.png")} style={styles.favorites}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    marginLeft: '5%',
    marginBottom: 5,
    color: "#4A4B4A",
    fontWeight: 'bold'
  },
  profileBanner: {
    width: "100%", 
    resizeMode: "contain"
  },
  boxText: {
    fontSize: 22
  },
  favorites: {
    height: 85, 
    resizeMode: "contain", 
    alignSelf: "center"
  },
  box: {
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 20
  }
});

export default Profile;
