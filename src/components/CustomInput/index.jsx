import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({ newStyle, icon, ...restProps }) => {
  return (
    <TextInput
      className="w-full m-2 p-2 text-base"
      style={newStyle}
      {...restProps}
    />
  );
};

export default CustomInput;
