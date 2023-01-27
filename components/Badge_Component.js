import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Badge_Component = ({ color, title, tag, setTag }) => {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      borderWidth: 1,
      borderColor: color,
      borderRadius: 10,
      padding: 5,
      backgroundColor: tag == title.toLowerCase() ? "lightgray" : "transparent",
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
    <TouchableOpacity onPress={() => setTag(title.toLowerCase())}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dot}></View>
      </View>
    </TouchableOpacity>
  );
};

export default Badge_Component;
