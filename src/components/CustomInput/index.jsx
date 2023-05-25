import React from "react";
import { TextInput } from "react-native";

const CustomInput = ({...restProps }) => {
  return (
    <TextInput
      className="w-full m-2 p-2 text-base"
      {...restProps}
    />
  );
};

export default CustomInput;
