import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import colors from "../theme/colors";

const Button_Component = ({
  buttonColor,
  textColor,
  styles,
  cursorColor,
  placeholder,
  onPress,
  text,
  size,
}) => (
  <Button
    textColor={textColor}
    style={{
      borderColor: buttonColor,
      backgroundColor: buttonColor,
      borderWidth: 1,
      width: size,
    }}
    onPress={onPress}
  >
    {text}
  </Button>
);

export default Button_Component;
