import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Avatar = (props) => {
  const {url} = props;
  return <Image source={{uri: url}} style={styles.avatar} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#c3c3c3',
  },
});
export default Avatar;
