import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constant/theme";

const loginAndSignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  gradientBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  formContent: {
    width: "80%",
    position: "absolute",
    bottom: "10%",
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.LargeTitle,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: COLORS.darkGray,
    padding: 10,
    fontSize: SIZES.medium,
  },
  inputFieldIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: COLORS.white,
    marginRight: 10,
  },
  rememberMeText: {
    color: COLORS.white,
    fontSize: SIZES.small,
  },
  loginButton: {
    backgroundColor: COLORS.green,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontWeight: "bold",
  },

  newUser: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default loginAndSignUpStyle;
