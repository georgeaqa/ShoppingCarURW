import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  FactionsItems: {
    flex: 1,
    margin:5,
  },
  imageContainer: {
    width: "100%",
    height: windowHeight / 8,
    borderBottomColor: COLORS.gold,
    borderBottomWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
