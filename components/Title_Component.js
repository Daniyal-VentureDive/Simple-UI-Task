import React from "react";
import { View, Text } from "react-native";
import colors from "../theme/colors";

const Title_Component = ({ title, navigation }) => (
  <View>
    <Text
      style={{ color: colors.primaryColor, fontWeight: "500", fontSize: 22 }}
    >
      {title}
    </Text>
  </View>
);

export default Title_Component;
