import { COLORS } from "../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems:'center',
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    maxHeight: 300,
    borderWidth:1,
    borderColor:COLORS.primaryColor,
  },
  text: {
    fontSize: 20,
    fontFamily: "DancingScript-VariableFont_wght",
  },
  input: {
    borderColor: COLORS.secondaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonSuccess: {
    backgroundColor: COLORS.success,

  },
  buttonText: {
    color: COLORS.white,
  },

});

export default styles;
