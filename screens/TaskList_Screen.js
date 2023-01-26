import React from "react";
import { View, StyleSheet } from "react-native";
import Task_Component from "../components/Task_Component";
import colors from "../theme/colors";

const TaskList_Screen = ({ params }) => {
  const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
  });

  return (
    <View style={styles.container}>
      <Task_Component
        color={colors.primaryColor}
        bg={"#F0F0F0"}
        title="Tasks 01"
      />
      <Task_Component color={"#FE0000"} showDot={true} title="Tasks 02" />
      <Task_Component
        color={colors.primaryColor}
        bg={"#F0F0F0"}
        title="Tasks 03"
      />
      <Task_Component color={"#9979FE"} showDot={true} title="Tasks 04" />
    </View>
  );
};

export default TaskList_Screen;
