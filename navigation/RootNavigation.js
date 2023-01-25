import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUp_Screen from "../screens/SignUp_Screen";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp_Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
