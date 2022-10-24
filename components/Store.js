import React from 'react';
import { Image } from 'react-native';
import { crowdLevel } from '../util/DescHelp';

import { Text, StyleSheet, View } from 'react-native';

const Store = () => {
  this.state = {
    store: {
      name: "Panda Express",
      score: 5,
      lastReported: 3
    }
  };
  return (
    <View>
      <Image source={require("../assets/storeBanner.png")} style={styles.banner}></Image>
      <Text style={styles.bizName}>{this.state.store.name}</Text>
      <Text style={styles.location}>On-Campus</Text>
      <View style={styles.crowdLevelBox}>
        <View style={{margin: 5}}>
          <Text style={styles.metrics}>{crowdLevel(this.state.store.score)}</Text>
          <Text style={styles.metricComp}>crowd level</Text>
        </View>
        <View style={{marginLeft: 25, marginRight: 25, borderWidth: 1}}></View>
        <View style={{margin: 5}}>
          <Text style={styles.metrics}>{this.state.store.lastReported + " min"}</Text>
          <Text style={styles.metricComp}>last reported</Text>
        </View>
      </View>
      <Text style={[styles.metricComp, {marginTop: 40, marginBottom: 10}]}>How crowded is this place?</Text>
      <View style={styles.reportBox}>
        <View>
          <Text style={styles.metricComp}>Low</Text>
        </View>
        <View style={{marginLeft: 25, marginRight: 25, borderWidth: 1}}></View>
        <View>
          <Text style={styles.metricComp}>Moderate</Text>
        </View>
        <View style={{marginLeft: 25, marginRight: 25, borderWidth: 1}}></View>
        <View>
          <Text style={styles.metricComp}>High</Text>
        </View>
      </View>
      <Text style={styles.innaccurateData}>
        <Text>Inaccurate data? </Text>
        <Text style={{fontWeight: "bold"}}>Report</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 150
  },
  innaccurateData: {
    textAlign: "right", 
    marginRight: "10%", 
    fontSize: 10, 
    marginTop: 5
  },
  crowdLevelBox: {
    flexDirection: "row", 
    justifyContent: "center", 
    borderWidth: 1, width: "80%", 
    alignSelf: "center", 
    borderRadius: 10
  },
  reportBox: {
    flexDirection: "row", 
    justifyContent: "center", 
    borderWidth: 1, 
    width: "80%", 
    alignSelf: "center", 
    backgroundColor: "lightgrey", 
    borderRadius: 10
  },
  bizName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "left",
    marginLeft: 20
  },
  location: {
    fontSize: 18,
    color: "#4A4B4A",
    marginLeft: 20,
    marginBottom: 20
  },
  metrics: {
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center"
  },
  metricComp: {
    fontSize: 16,
    justifyContent: "center",
    alignSelf: "center",
    color: "#4A4B4A"
  }
});

export default Store;
