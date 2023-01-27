import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import Badge_Component from "../components/Badge_Component";
import Title_Component from "../components/Title_Component";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import colors from "../theme/colors";
import Button_Component from "../components/Button_Component";
import { insertNewTask } from "../database/db";

const NewTask_Screen = ({ navigation }) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: "space-around",
    },

    title_textInput: {
      fontSize: 18,
      //height: "25%",
      borderBottomWidth: 2,
      borderBottomColor: colors.primaryColor,
    },

    description: {
      borderWidth: 2,
      borderColor: colors.primaryColor,
      borderRadius: 10,
      padding: 5,
    },

    tags: { marginTop: 20 },
    tagsInnerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },

    addImages: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    addImagesInner: {
      backgroundColor: colors.primaryColor,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 34,
    },
    addImagesInner2: {
      backgroundColor: colors.secondaryColor,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 34,
      borderColor: colors.primaryColor,
      borderWidth: 2,
    },
    addMember_textInput: {
      fontSize: 18,
      //height: "7%",
      borderBottomWidth: 2,
      borderBottomColor: colors.primaryColor,
    },
    button: {
      display: "flex",
      alignItems: "center",
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [member, setMember] = useState("");

  const handleCreateTask = () => {};

  return (
    <View style={styles.mainContainer}>
      <View>
        <Title_Component title={"Task Name"} />
        <TextInput
          style={styles.title_textInput}
          placeholder="Name of the task here"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>

      <View>
        {/* Description */}
        <Title_Component title={"Description"} />
        <TextInput
          style={styles.description}
          multiline={true}
          numberOfLines={2}
          placeholder="Description of the task here"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        {/* Tags */}
        <View style={styles.tags}>
          <Title_Component title={"Tags"} />
          <View style={styles.tagsInnerContainer}>
            <Badge_Component title={"Personal"} color={"#9978FF"} />
            <Badge_Component title={"Work"} color={colors.primaryColor} />
            <Badge_Component title={"Urgent"} color={"red"} />
          </View>
        </View>
      </View>

      <View>
        <Title_Component title={"Add Images"} />
        <View style={styles.addImages}>
          <View style={styles.addImagesInner}>
            <FontAwesomeIcons
              name="camera"
              color={colors.secondaryColor}
              size={32}
            />
          </View>

          <View style={styles.addImagesInner}>
            <FontAwesomeIcons
              name="camera"
              color={colors.secondaryColor}
              size={32}
            />
          </View>

          <View style={styles.addImagesInner2}>
            <FontAwesomeIcons
              name="plus"
              color={colors.primaryColor}
              size={32}
            />
          </View>
        </View>
      </View>

      <View>
        <Title_Component title={"Add Member"} />
        <TextInput
          style={styles.addMember_textInput}
          placeholder="Name of the member here"
          onChangeText={(text) => setMember(text)}
          value={member}
        />
      </View>

      <View style={styles.button}>
        <Button_Component
          text={"Create Task"}
          buttonColor={colors.primaryColor}
          textColor={colors.secondaryColor}
          size={120}
        />
      </View>
    </View>
  );
};

export default NewTask_Screen;
