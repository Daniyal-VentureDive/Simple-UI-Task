import React from "react";
import { Text, View } from "react-native";
import colors from "../theme/colors";
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
  return (
    <TextInput
      label={label}
      value={value}
      style={{
        ...styles,
        fontSize: 18,
        backgroundColor: fillColor,
      }}
      underlineColor={cursorColor}
      textColor={cursorColor}
      selectionColor={cursorColor}
      theme={{
        colors: {
          placeholder: cursorColor,
          text: cursorColor,
          primary: cursorColor,
          secondary: cursorColor,
        },
      }}
      onChangeText={onChangeText}
    />
  );
};

export default TextField_Component;
