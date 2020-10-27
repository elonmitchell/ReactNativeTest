/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Icon from 'react-native-vector-icons/AntDesign';
import Api from './api/search';

const App: () => React$Node = () => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    Icon.loadFont();
  }, []);

  const handleSearch = async (q) => {
    try {
      const results = await Api.search(q);
      if (results) {
        setData({
          events: results.events ? results.events.slice(0, 3) : [],
          performers: results.performers ? results.performers.slice(0, 3) : [],
          venues: results.venues ? results.venues.slice(0, 3) : [],
        });
      } else {
        setData(null)
      }
    } catch (err) {
      setErrors(err.toString());
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {errors ? <Text style={styles.errors}>{errors}</Text> : null}
          <SearchBar onSearch={handleSearch} />
          <SearchResults data={data} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollView: {
    height: '100%',
  },
  errors: {
    color: 'red',
    padding: 16,
  },
});

export default App;
