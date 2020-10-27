import React from 'react';
import {StyleSheet, View} from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderTopColor: '#0D0D0D',
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    height: 0,
  },
});
export default Divider;
