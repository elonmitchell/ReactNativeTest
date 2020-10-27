import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListItem = (props) => {
  const {prepend, content, append} = props
  return (
    <View style={styles.container}>
      <View style={styles.prepend}>
        {prepend}
      </View>
      <View style={styles.content}>
        {content}
      </View>
      <View style={styles.append}>
        {append}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1C1C1C'
  },
  prepend: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  content: {
    flexGrow: 1,
  },
  append: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
})
export default ListItem;
