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
  const Label = <Text color={cursorColor}>{label}</Text>;
  return (
    <TextInput
      label={Label}
      value={value}
      style={{
        ...styles,
        fontSize: 18,
        backgroundColor: fillColor,
      }}
      textColor={cursorColor}
      cursorColor={cursorColor}
      activeOutlineColor={cursorColor}
      activeUnderlineColor={cursorColor}
      onChangeText={onChangeText}
      theme={{ colors: { text: cursorColor } }}
    />
  );
};

export default TextField_Component;
