import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

const Title_Component = ({ title }) => {
  const styles = StyleSheet.create({
    title: { color: colors.primaryColor, fontWeight: "500", fontSize: 22 },
  });
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title_Component;
