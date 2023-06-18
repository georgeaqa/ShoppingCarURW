import { Text, View } from "react-native";

import React from "react";

const CustomText = ({ text, newStyle }) => {
  return (
    <Text className="text-lg" style={[{ fontFamily: "UrbanRivals" }, newStyle]}>
      {text}
    </Text>
  );
};

export default CustomText;
