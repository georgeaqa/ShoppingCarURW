import { COLORS } from "../../../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingRight:'5%',
    paddingLeft:'5%',
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    maxWidth: 300,
    maxHeight: 300,
  },
  input: {

    backgroundColor:COLORS.white,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonPrimary:{
    backgroundColor:COLORS.primaryColor,
  },
  buttonTextPrimary:{
    color:COLORS.white,
  },
  buttonTextTertiary:{
    color:COLORS.tertiaryColor,
  }
  
});

export default styles;
