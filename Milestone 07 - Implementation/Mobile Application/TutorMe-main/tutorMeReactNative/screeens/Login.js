import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constant/theme";
import loginAndSignUpStyle from "../global/loginAndSignUpStyle";

export default function Login() {
  return (
    <LinearGradient
      colors={[COLORS.green, COLORS.darkGreen]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.9 }}
      style={loginAndSignUpStyle.gradientBackground}
    >
      <ImageBackground
        source={require("../assets/images/loginBg.png")}
        style={loginAndSignUpStyle.bgImage}
      >
        <View style={loginAndSignUpStyle.container}>
          <View style={loginAndSignUpStyle.formContent}>
            <Text style={loginAndSignUpStyle.title}>Login</Text>
            <View style={loginAndSignUpStyle.inputField}>
              <Image
                source={require("../assets/icons/user.png")}
                style={loginAndSignUpStyle.inputFieldIcon}
              />
              <TextInput
                style={loginAndSignUpStyle.input}
                placeholder="User name"
                placeholderTextColor={COLORS.darkGray}
              />
            </View>
            <View style={loginAndSignUpStyle.inputField}>
              <Image
                source={require("../assets/icons/padlock.png")}
                style={loginAndSignUpStyle.inputFieldIcon}
              />
              <TextInput
                style={loginAndSignUpStyle.input}
                placeholder="Password"
                placeholderTextColor={COLORS.darkGray}
              />
            </View>
            <TouchableOpacity style={loginAndSignUpStyle.forgotPassword}>
              <Text style={loginAndSignUpStyle.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <View style={loginAndSignUpStyle.rememberMe}>
              <TouchableOpacity
                style={loginAndSignUpStyle.checkbox}
              ></TouchableOpacity>
              <Text style={loginAndSignUpStyle.rememberMeText}>
                Remember Me
              </Text>
            </View>
            <TouchableOpacity style={loginAndSignUpStyle.loginButton}>
              <Text style={loginAndSignUpStyle.loginButtonText}>Login Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={loginAndSignUpStyle.newUser}>
              <Text style={loginAndSignUpStyle.forgotPasswordText}>
                New user? Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//   },
//   gradientBackground: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bgImage: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   formContent: {
//     width: "80%",
//     position: "absolute",
//     bottom: "10%",
//   },
//   title: {
//     color: COLORS.white,
//     fontSize: SIZES.LargeTitle,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   inputField: {
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     marginBottom: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   input: {
//     flex: 1,
//     color: COLORS.darkGray,
//     padding: 10,
//     fontSize: SIZES.medium,
//   },
//   inputFieldIcon: {
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//   },
//   forgotPassword: {
//     alignSelf: "flex-end",
//     marginBottom: 20,
//   },
//   forgotPasswordText: {
//     color: COLORS.white,
//     fontSize: SIZES.small,
//   },
//   rememberMe: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   checkbox: {
//     width: 15,
//     height: 15,
//     borderWidth: 2,
//     borderRadius: 2,
//     borderColor: COLORS.white,
//     marginRight: 10,
//   },
//   rememberMeText: {
//     color: COLORS.white,
//     fontSize: SIZES.small,
//   },
//   loginButton: {
//     backgroundColor: COLORS.green,
//     borderRadius: 10,
//     padding: 15,
//     alignItems: "center",
//   },
//   loginButtonText: {
//     color: COLORS.white,
//     fontSize: SIZES.large,
//     fontWeight: "bold",
//   },

//   newUser: {
//     alignSelf: "center",
//     marginTop: 20,
//   },
// });
