import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { FindColor, GenDescription } from '../util/MarkerHelp';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize('YOUR_APPLICATION_ID_HERE', 'YOUR_JAVASCRIPT_KEY_HERE');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

const MapPage = () => {
  const [locList, changeLocList] = useState([new Parse.Object('Location')]);

  async function fetchPerson() {
    let query = new Parse.Query('Location');
    let queryResult = await query.find();
    console.log("here" + queryResult[0].get("Name"));
    changeLocList(queryResult);
  }

  useEffect(() => {
    fetchPerson()
  }, []);

  return (
    <View style={styles.container} >
      <MapView
        style={styles.map}
        showsMyLocationButton={true}
        region={{
          latitude: 33.7756,
          longitude: -84.3963,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}>
        {locList.map((marker) => (
          <Marker
            coordinate={{latitude: marker.get('Latitude'), longitude: marker.get('Longitude')}}
            title={marker.get('Name')}
            description={GenDescription(marker.get('crowdScore'))}
            pinColor={FindColor(marker.get('crowdScore'))}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 100,
  },
});

export default MapPage;