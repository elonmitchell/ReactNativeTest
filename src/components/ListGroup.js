import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Divider from './Divider'

const ListGroup = (props) => {
  const {title, data, renderItem} = props
  if (!data) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <>
          {renderItem(item)}
          {data.length > 1 && index < data.length - 1 && <Divider/>}
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8
  },
  title: {
    fontSize: 12,
    color: '#bebebe',
    backgroundColor: '#272727',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  }
});

export default ListGroup;
