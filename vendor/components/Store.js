import React from 'react';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const Store = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: "center",
    marginTop: 100
  }
});

export default Store;
