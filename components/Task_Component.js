import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task_Component = ({ color, title, showDot, bg }) => {
  const styles = StyleSheet.create({
    mainContainer: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 5,
      padding: 10,
      backgroundColor: bg,
    },

    circle: {
      width: 80,
      height: 80,
      borderRadius: 50,
      backgroundColor: color,
    },
    contentBox: { paddingHorizontal: 30, width: "100%", height: "100%" },
    title: {
      fontSize: 19,
      color: color,
      fontWeight: "400",
    },
    dot: {
      backgroundColor: color,
      position: "absolute",
      width: 12,
      height: 12,
      borderRadius: 50,
      left: 90,
    },
    innerContainer: { position: "relative" },
    notes: {
      fontSize: 19,
      color: "gray",
      fontWeight: "300",
      marginVertical: 10,
    },

    underline: {
      backgroundColor: color,
      height: "2%",
      width: "80%",
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.circle}></View>
      <View style={styles.contentBox}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          {showDot && <View style={styles.dot}></View>}
        </View>
        <Text style={styles.notes}>Notes from the tasks</Text>
        <View style={styles.underline}></View>
      </View>
    </View>
  );
};

export default Task_Component;
