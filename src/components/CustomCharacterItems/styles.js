import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "../../constants/index";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  characterItem: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    margin: 5,
  },
  characterName: {
    fontSize: 25,
    fontFamily: "DancingScript-VariableFont_wght",
    textAlign: "center",
  },
  imageContainer: {
    width: windowWidth / 2,
    height: windowHeight / 4,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
