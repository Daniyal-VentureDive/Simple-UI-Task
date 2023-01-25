import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextField_Component from "../components/TextField_Component";
import colors from "../theme/colors";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Button_Component from "../components/Button_Component";

const SignUp_Screen = ({ navigation }) => (
  <View style={styles.container}>
    {/* Logo Header */}
    <View style={{ position: "relative" }}>
      <FontAwesomeIcons
        name="camera"
        color={colors.primaryColor}
        size={18}
        style={{
          position: "absolute",
          right: 5,
          zIndex: 4,
          top: 30,
        }}
      />

      <View
        style={{
          backgroundColor: colors.secondaryColor,
          borderRadius: 50,
          padding: 10,
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcons name="user-o" color={colors.primaryColor} size={80} />
      </View>
    </View>

    {/* Title Text */}
    <View
      style={{
        backgroundColor: colors.primaryColor,
        width: "100%",
      }}
    >
      <Text style={styles.title}>Create Your Account </Text>
    </View>

    {/* Input Fields */}
    <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 40 }}>
      <TextField_Component
        label={"Name"}
        value=""
        fillColor={colors.primaryColor}
        textColor={colors.secondaryColor}
        cursorColor={colors.secondaryColor}
        styles={{ width: "92%", marginBottom: 25 }}
      />

      <TextField_Component
        label={"Email Address"}
        value=""
        fillColor={colors.primaryColor}
        textColor={colors.secondaryColor}
        cursorColor={colors.secondaryColor}
        styles={{ width: "92%", marginBottom: 25 }}
      />

      <TextField_Component
        label={"Password"}
        value=""
        fillColor={colors.primaryColor}
        textColor={colors.secondaryColor}
        cursorColor={colors.secondaryColor}
        styles={{ width: "92%", marginBottom: 25 }}
      />
    </View>

    {/* Button  */}
    <View style={{ marginTop: 40 }}>
      <Button_Component
        text={"Create Task"}
        buttonColor={colors.secondaryColor}
        textColor={colors.primaryColor}
        onPress={() => {
          navigation.navigate("TaskList");
        }}
      />
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <Text style={{ color: colors.secondaryColor, fontSize: 13 }}>
        {" "}
        Already Have Account ?{" "}
      </Text>
      <Text
        style={{
          color: colors.secondaryColor,
          fontSize: 14,
          fontWeight: "bold",
        }}
      >
        {" "}
        Login
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    width: "100%",
    height: "100%",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: "10%",
  },
  title: {
    color: colors.secondaryColor,
    fontSize: 23,
    textAlign: "center",
    marginTop: 40,
  },
});

export default SignUp_Screen;
