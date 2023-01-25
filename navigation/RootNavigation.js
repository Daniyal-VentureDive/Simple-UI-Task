import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import SignUp_Screen from "../screens/SignUp_Screen";
import TaskList_Screen from "../screens/TaskList_Screen";
import colors from "../theme/colors";
import AntdIcons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import NewTask_Screen from "../screens/NewTask_Screen";
const Stack = createStackNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp_Screen}
      />

      <Stack.Screen
        name="TaskList"
        options={{
          title: "Tasks",
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: colors.secondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            marginLeft: 100,
          },
          headerLeft: () => (
            <AntdIcons
              color={colors.secondaryColor}
              name="back"
              size={30}
              style={{ marginLeft: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),

          headerRight: () => (
            <FontAwesomeIcons
              color={colors.secondaryColor}
              name="ellipsis-v"
              size={30}
              style={{ marginRight: 35 }}
              onPress={() => {
                navigation.navigate("NewTask");
              }}
            />
          ),
        }}
        component={TaskList_Screen}
      />

      <Stack.Screen
        name="NewTask"
        options={{
          title: "New Task",
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: colors.secondaryColor,
          headerTitleStyle: {
            fontWeight: "bold",
            marginLeft: 95,
          },
          headerLeft: () => (
            <AntdIcons
              color={colors.secondaryColor}
              name="back"
              size={30}
              style={{ marginLeft: 20 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),

          headerRight: () => (
            <FontAwesomeIcons
              color={colors.secondaryColor}
              name="ellipsis-v"
              size={30}
              style={{ marginRight: 35 }}
              onPress={() => {
                navigation.navigate("TaskList");
              }}
            />
          ),
        }}
        component={NewTask_Screen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
