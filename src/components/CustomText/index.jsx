import { Text, View } from "react-native";

import React from "react";

const CustomText = ({ text }) => {
  return (
    <Text className="text-lg" style={{ fontFamily: "UrbanRivals" }}>
      {text}
    </Text>
  );
};

export default CustomText;
