import React from "react";
import { TextInput, View, Text } from "react-native";
import Badge_Component from "../components/Badge_Component";
import Title_Component from "../components/Title_Component";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import colors from "../theme/colors";
import Button_Component from "../components/Button_Component";

const NewTask_Screen = ({ navigation }) => (
  <View
    style={{ flex: 1, paddingHorizontal: 20, justifyContent: "space-around" }}
  >
    <View>
      <Title_Component title={"Task Name"} />
      <TextInput
        style={{
          fontSize: 18,
          //height: "25%",
          borderBottomWidth: 2,
          borderBottomColor: colors.primaryColor,
        }}
        placeholder="Name of the task here"
      />
    </View>
    <View>
      <Title_Component title={"Description"} />
      <View
        style={{
          borderWidth: 2,
          borderColor: colors.primaryColor,
          borderRadius: 10,
          padding: 5,
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
          ipsum dolor sit amet.
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Title_Component title={"Tags"} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Badge_Component title={"Personal"} color={"#9978FF"} />
          <Badge_Component title={"Work"} color={colors.primaryColor} />
          <Badge_Component title={"Urgent"} color={"red"} />
        </View>
      </View>
    </View>
    <View>
      <Title_Component title={"Add Images"} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            backgroundColor: colors.primaryColor,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 34,
          }}
        >
          <FontAwesomeIcons
            name="camera"
            color={colors.secondaryColor}
            size={32}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.primaryColor,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 34,
          }}
        >
          <FontAwesomeIcons
            name="camera"
            color={colors.secondaryColor}
            size={32}
          />
        </View>

        <View
          style={{
            backgroundColor: colors.secondaryColor,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 34,
            borderColor: colors.primaryColor,
            borderWidth: 2,
          }}
        >
          <FontAwesomeIcons name="plus" color={colors.primaryColor} size={32} />
        </View>
      </View>
    </View>

    <View>
      <Title_Component title={"Add Member"} />
      <TextInput
        style={{
          fontSize: 18,
          //height: "7%",
          borderBottomWidth: 2,
          borderBottomColor: colors.primaryColor,
        }}
        placeholder="Name of the member here"
      />
    </View>

    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button_Component
        text={"Create Task"}
        buttonColor={colors.primaryColor}
        textColor={colors.secondaryColor}
        size={120}
      />
    </View>
  </View>
);

export default NewTask_Screen;
