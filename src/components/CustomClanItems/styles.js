import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  imageContainer: {
    width: windowWidth/2,
    height: windowHeight/6,
  },
});

export default styles;