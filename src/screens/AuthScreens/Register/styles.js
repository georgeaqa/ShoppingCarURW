import { COLORS } from "../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingRight: "5%",
    paddingLeft: "5%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    maxHeight: 300,
  },
  input: {
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
  },
  buttonSuccess: {
    backgroundColor: COLORS.success,
  },
  buttonText: {
    color: COLORS.white,
  },
});

export default styles;
