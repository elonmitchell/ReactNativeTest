import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const EventDate = (props) => {
  const {datetime_local} = props.event;
  const jsDate = new Date(datetime_local)

  const date = new Intl.DateTimeFormat('en-US', {
    month: 'numeric',
    day: 'numeric',
  }).format(jsDate);
  const weekday = new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(jsDate);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.weekday}>{weekday}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#fff',
  },
  weekday: {
    fontSize: 12,
    color: '#c3c3c3',
  },
});
export default EventDate;
