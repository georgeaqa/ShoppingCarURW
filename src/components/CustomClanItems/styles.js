import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ClanItem: {
    flex: 1,
  },
  imageContainer: {
    width: windowWidth/2,
    height: windowHeight/6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;