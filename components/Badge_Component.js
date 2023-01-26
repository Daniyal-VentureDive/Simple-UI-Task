import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Badge_Component = ({ color, title }) => {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      borderWidth: 1,
      borderColor: color,
      borderRadius: 10,
      padding: 5,
    },
    title: { fontSize: 15 },
    dot: {
      backgroundColor: color,
      position: "absolute",
      height: 10,
      width: 10,
      right: -3,
      top: -4,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dot}></View>
    </View>
  );
};

export default Badge_Component;
