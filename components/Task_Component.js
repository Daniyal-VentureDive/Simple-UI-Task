import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task_Component = ({ color, title, showDot, bg, description, tag }) => {
  const getTagColor = () => {
    if (tag == "personal") {
      return "#F0F0F0";
    } else if (tag == "work") {
      return "#9979FE";
    } else {
      return "#FE0000";
    }
  };

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
      backgroundColor: getTagColor(),
    },
    contentBox: { paddingHorizontal: 30, width: "100%", height: "100%" },
    title: {
      fontSize: 19,
      color: getTagColor(),
      fontWeight: "400",
    },
    dot: {
      backgroundColor: getTagColor(),
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
      backgroundColor: getTagColor(),
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
          <View style={styles.dot}></View>
        </View>
        <Text style={styles.notes}>{description}</Text>
        <View style={styles.underline}></View>
      </View>
    </View>
  );
};

export default Task_Component;
