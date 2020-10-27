import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = (props) => {
  const {onSearch} = props;
  const [value, setValue] = useState('');
  const handleChangeText = (v) => {
    setValue(v);
    onSearch && onSearch(v);
  };
  const handleClickCancel = () => {
    setValue('');
    onSearch && onSearch('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Icon name="search1" size={22} color="#C4C4C4" />
        <TextInput
          style={styles.inputBox}
          onChangeText={handleChangeText}
          value={value}
        />
        <TouchableOpacity style={styles.button} onPress={handleClickCancel}>
          <Icon name="closecircle" size={22} color="#C4C4C4" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClickCancel}>
        <Text style={styles.buttonText}>CANCEL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputArea: {
    backgroundColor: '#272727',
    borderRadius: 24,
    flexGrow: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  inputBox: {
    flexGrow: 1,
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  button: {
    marginLeft: 16,
  },
  buttonText: {
    color: '#C4C4C4',
    fontSize: 12,
    letterSpacing: 2,
  },
});
export default SearchBar;
