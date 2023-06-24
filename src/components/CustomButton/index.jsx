import { Button } from "react-native-paper";
import { COLORS } from "../../constants";
import CustomText from "../CustomText";
import React from "react";

const CustomButton = ({ text, ...restProps }) => {
  return (
    <Button
      className="w-full m-2" 
      mode="elevated"
      labelStyle={{ fontFamily: "UrbanRivals" }}
      {...restProps}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
