import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import TextField_Component from "../components/TextField_Component";
import colors from "../theme/colors";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Button_Component from "../components/Button_Component";

const SignUp_Screen = ({ navigation }) => {
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

    titleContainer: {
      backgroundColor: colors.primaryColor,
      width: "100%",
    },
    logoContainer: { position: "relative" },
    cameraIcon: {
      position: "absolute",
      right: 5,
      zIndex: 4,
      top: 30,
    },
    userIconContainer: {
      backgroundColor: colors.secondaryColor,
      borderRadius: 50,
      padding: 10,
      width: 100,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    inputFieldsContainer: {
      width: "100%",
      paddingHorizontal: 20,
      marginTop: 40,
    },

    buttonContainer: { marginTop: 40 },

    linkContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 50,
    },
    linkText: { color: colors.secondaryColor, fontSize: 13 },
    linkLogin: {
      color: colors.secondaryColor,
      fontSize: 14,
      fontWeight: "bold",
    },
    textInput: { width: "92%", marginBottom: 25 },
  });

  return (
    <View style={styles.container}>
      {/* Logo Header */}
      <View style={styles.logoContainer}>
        <FontAwesomeIcons
          name="camera"
          color={colors.primaryColor}
          size={18}
          style={styles.cameraIcon}
        />

        <View style={styles.userIconContainer}>
          <FontAwesomeIcons
            name="user-o"
            color={colors.primaryColor}
            size={80}
          />
        </View>
      </View>

      {/* Title Text */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create Your Account </Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputFieldsContainer}>
        <TextField_Component
          label={"Name"}
          value=""
          fillColor={colors.primaryColor}
          textColor={colors.secondaryColor}
          cursorColor={colors.secondaryColor}
          styles={styles.textInput}
        />

        <TextField_Component
          label={"Email Address"}
          value=""
          fillColor={colors.primaryColor}
          textColor={colors.secondaryColor}
          cursorColor={colors.secondaryColor}
          styles={styles.textInput}
        />

        <TextField_Component
          label={"Password"}
          value=""
          fillColor={colors.primaryColor}
          textColor={colors.secondaryColor}
          cursorColor={colors.secondaryColor}
          styles={styles.textInput}
        />
      </View>

      {/* Button  */}
      <View style={styles.buttonContainer}>
        <Button_Component
          text={"Create Task"}
          buttonColor={colors.secondaryColor}
          textColor={colors.primaryColor}
          onPress={() => {
            navigation.navigate("TaskList");
          }}
        />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}> Already Have Account ? </Text>
        <Text
          style={styles.linkLogin}
          onPress={() => {
            navigation.navigate("TaskList");
          }}
        >
          {" "}
          Login
        </Text>
      </View>
    </View>
  );
};

export default SignUp_Screen;
