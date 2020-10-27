import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListGroup from './ListGroup';
import ListItem from './ListItem';
import ListItemContent from './ListItemContent';
import Avatar from './Avatar';
import EventDate from './EventDate';
import Icon from 'react-native-vector-icons/AntDesign';

const renderEvent = (item) => (
  <ListItem
    key={item.event.id}
    prepend={<EventDate event={item.event}/>}
    content={
      <ListItemContent title={item.event.name} subtitle={item.venue.name} />
    }
  />
);

const renderPerformer = (item) => (
  <ListItem
    key={item.id}
    prepend={<Avatar url={item.hero_image_url} />}
    content={
      <ListItemContent title={item.name} subtitle={item.category} />
    }
    append={<Icon name="right" color="#C3C3C3" size={20}/>}
  />
);

const renderVenue = (item) => (
  <ListItem
    key={item.id}
    prepend={<Avatar url={item.image_url} />}
    content={
      <ListItemContent title={item.name} subtitle={`${item.city} ${item.state}`} />
    }
    append={<Icon name="right" color="#C3C3C3" size={20}/>}
  />
);

const SearchResults = (props) => {
  const {events, performers, venues} = props.data || {};
  return (
    <View style={styles.container}>
      <ListGroup title="Events" data={events} renderItem={renderEvent} />
      <ListGroup
        title="Performers"
        data={performers}
        renderItem={renderPerformer}
      />
      <ListGroup title="Venues" data={venues} renderItem={renderVenue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchResults;
