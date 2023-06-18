import CustomText from "../CustomText";
import { Pressable } from "react-native";
import React from "react";

const CustomButton = ({ newStyleText, text, ...restProps }) => {
  return (
    <Pressable
      className="w-full items-center m-2 p-2 rounded-2xl"
      {...restProps}
    >
      <CustomText newStyle={newStyleText} text={text} />
    </Pressable>
  );
};

export default CustomButton;
