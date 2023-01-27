import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Task_Component from "../components/Task_Component";
import colors from "../theme/colors";
import { firebase } from "../config";

const TaskList_Screen = ({ params }) => {
  const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },

    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    loadingText: { fontSize: 20, fontStyle: "italic" },
  });

  const taskRef = firebase.firestore().collection("tasks");
  const [tasks, setTasks] = useState([]);
  const [isApiFetched, setIsApiFetched] = useState(false);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    taskRef.onSnapshot((querySnapshot) => {
      const tasks = [];

      querySnapshot.forEach((doc) => {
        const { name, description, member, tag } = doc.data();
        tasks.push({
          id: doc.id,
          name,
          description,
          member,
          tag,
        });
      });
      setIsApiFetched(true);
      setTasks(tasks);
    });
  };

  return (
    <View style={styles.container}>
      {isApiFetched ? (
        <View>
          {tasks.map((item) => (
            <Task_Component
              key={item.id}
              color={colors.primaryColor}
              // bg={"#F0F0F0"}
              title={item.name}
              tag={item.tag}
              description={item.description}
            />
          ))}
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default TaskList_Screen;
