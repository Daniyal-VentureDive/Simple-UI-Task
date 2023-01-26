import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const Button_Component = ({
  buttonColor,
  textColor,
  styles,
  cursorColor,
  placeholder,
  onPress,
  text,
  size,
}) => {
  const Styles = StyleSheet.create({
    button: {
      borderColor: buttonColor,
      backgroundColor: buttonColor,
      borderWidth: 1,
      width: size,
    },
  });
  return (
    <Button textColor={textColor} style={Styles.button} onPress={onPress}>
      {text}
    </Button>
  );
};

export default Button_Component;
