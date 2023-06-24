import React from "react";
import { Text } from "react-native-paper";

const CustomText = ({ text, newStyle,...restProps }) => {
  return (
    <Text style={[{ fontFamily: "UrbanRivals" }, newStyle]} {...restProps}>
      {text}
    </Text>
  );
};

export default CustomText;
