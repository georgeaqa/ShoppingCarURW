import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  characterItem: {
    flex: 1,
    borderWidth:2,
  },
  characterName:{
    textAlign:"center",
    fontSize:30,
    fontFamily:"DancingScript-VariableFont_wght",
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight/2,
    borderWidth:2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;