import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const ShowList = (props) => {
  return (
    <View style={styles.viewStyle}>
      {props.data.map((v, i) => {
        return (
          <Pressable 
          key={i}
            style={styles.todoList}
            onPress={props.onDelete.bind(this, v.id)}>
            <Text style={styles.textList}>{i + 1}. </Text>
            <Text style={styles.textList}>{v.text}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textList: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonLargeContainer: {},
  buttonText: {},
  pressedItem: {opacity: 0.5},
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  todoList: {
    margin: 10,
    paddingVertical: 15,
    borderRadius: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ab5fcf',
    flexDirection: 'row',
  },
});

export default ShowList;
