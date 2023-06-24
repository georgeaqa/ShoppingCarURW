import { Button } from "react-native-paper";
import React from "react";

const CustomButton = ({ text, ...restProps }) => {
  return (
    <Button
      className="w-full m-2"
      labelStyle={{ fontFamily: "UrbanRivals" }}
      {...restProps}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
