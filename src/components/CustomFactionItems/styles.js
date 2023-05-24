import { Dimensions, StyleSheet } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  heightContainer: {
    height: windowHeight *0.1,
  },
});

export default styles;
