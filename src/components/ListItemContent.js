import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListItemContent = (props) => {
  const {title, subtitle} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  title: {
    fontSize: 14,
    color: '#fff'
  },
  subtitle: {
    fontSize: 12,
    color: '#c3c3c3'
  },
})
export default ListItemContent;
