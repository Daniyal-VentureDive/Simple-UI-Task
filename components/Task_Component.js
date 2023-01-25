import React from "react";
import { View, Text } from "react-native";

const Task_Component = ({ color, title, showDot, bg }) => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      marginBottom: 5,
      padding: 10,
      backgroundColor: bg,
    }}
  >
    <View
      style={{
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: color,
      }}
    ></View>
    <View style={{ paddingHorizontal: 30, width: "100%", height: "100%" }}>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            fontSize: 19,
            color: color,
            fontWeight: "400",
          }}
        >
          {title}
        </Text>
        {showDot && (
          <View
            style={{
              backgroundColor: color,
              position: "absolute",
              width: 12,
              height: 12,
              borderRadius: 50,
              left: 90,
            }}
          ></View>
        )}
      </View>

      <Text
        style={{
          fontSize: 19,
          color: "gray",
          fontWeight: "300",
          marginVertical: 10,
        }}
      >
        Notes from the tasks
      </Text>

      <View
        style={{
          backgroundColor: color,
          height: "2%",
          width: "80%",
        }}
      ></View>
    </View>
  </View>
);

export default Task_Component;
