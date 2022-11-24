import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AddTxt from './AddTxt';

const Main = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      {auth ? (
        <AddTxt />
      ) : (
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>This is Home Page!</Text>
          <TouchableOpacity
            style={styles.buttonLargeContainer}
            onPress={() => setAuth(true)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'purple',
    width: '40%',
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderRadius: 20,
  },
});

export default Main;
