import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation/RootNavigation";

import { NavigationContainer } from "@react-navigation/native";

// import realm from "./database/realm";
// import { RealmProvider } from "react-native-realm";
// import MyComponent from "./database/mycomponent";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
    // <RealmProvider realm={realm}>
    //   <MyComponent />
    // </RealmProvider>
  );
}
