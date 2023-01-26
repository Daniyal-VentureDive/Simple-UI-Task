import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const TextField_Component = ({
  fillColor,
  textColor,
  styles,
  cursorColor,
  placeholder,
  onChangeText,
  label,
  value,
}) => {
  const Styles = StyleSheet.create({
    textInput: {
      ...styles,
      fontSize: 18,
      backgroundColor: fillColor,
    },
    theme: {
      colors: {
        placeholder: cursorColor,
        text: cursorColor,
        primary: cursorColor,
        secondary: cursorColor,
      },
    },
  });

  return (
    <TextInput
      label={label}
      value={value}
      style={Styles.textInput}
      underlineColor={cursorColor}
      textColor={cursorColor}
      selectionColor={cursorColor}
      theme={Styles.theme}
      onChangeText={onChangeText}
    />
  );
};

export default TextField_Component;
