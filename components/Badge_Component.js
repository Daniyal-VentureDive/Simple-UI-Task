import React from "react";
import { Text, View } from "react-native";

const Badge_Component = ({ color, title }) => (
  <View
    style={{
      position: "relative",
      borderWidth: 1,
      borderColor: color,
      borderRadius: 10,
      padding: 5,
    }}
  >
    <Text style={{ fontSize: 15 }}>{title}</Text>
    <View
      style={{
        backgroundColor: color,
        position: "absolute",
        height: 10,
        width: 10,
        right: -3,
        top: -4,
        borderRadius: 50,
      }}
    ></View>
  </View>
);

export default Badge_Component;
