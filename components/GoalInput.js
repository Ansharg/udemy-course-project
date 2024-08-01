import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal, Image, Keyboard } from "react-native";
import image from '../assets/favicon.png'


const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function onChange(enteredtext) {
    setEnteredGoal(enteredtext);
  }
  function onClick() {
    props.onClick(enteredGoal);
    setEnteredGoal("");
    props.cancel();
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={image}/>
        <TextInput
          style={styles.textInput}
          onChangeText={onChange}
          value={enteredGoal}
          placeholder="Your course goal!"
          onSubmitEditing={onClick}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onClick} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancel} color={"#f31282"}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: "#120438",
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});