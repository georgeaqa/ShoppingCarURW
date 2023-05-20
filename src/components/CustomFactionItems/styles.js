import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  FactionsItems: {
    flex: 1,
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight / 8,
    borderBottomColor: COLORS.gold,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
  },
});

export default styles;
