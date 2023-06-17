import { Pressable, Text } from "react-native";

import React from "react";

const CustomButton = ({ newStyleText, text, ...restProps }) => {
  return (
    <Pressable
      className="w-full items-center m-2 p-2 rounded-2xl"
      {...restProps}
    >
      <Text
        className="text-base"
        style={[newStyleText, { fontFamily: "UrbanRivals" }]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
