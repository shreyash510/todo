import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import ShowList from './ShowList';

const AddTxt = () => {
  const [test, setTest] = useState([]);
  const [txt, setTxt] = useState('');

  const addTodo = () => {
    setTest([...test, {text: txt, id: Math.random().toString()}]);
    setTxt('')
  };

  const delList = id => {
    setTest(current => {
      return test.filter(todo => todo.id !== id);
    });
  };

  return (
    <>
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.input}
          placeholder="Enter list item.."
          placeholderTextColor="#000"
          onChangeText={text => setTxt(text)}
          value={txt}
        />
        <TouchableOpacity
          style={styles.buttonLargeContainer}
          onPress={() => addTodo()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ShowList onDelete={delList} data={test} />
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },

  buttonLargeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'purple',
    width: '30%',
    textAlign: 'center',
    paddingTop: '4%',
    paddingBottom: '4%',
    borderRadius: 20,
  },

  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 10,
  },
});

export default AddTxt;
