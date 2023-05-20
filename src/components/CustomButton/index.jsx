import { Pressable, Text } from "react-native";

import React from "react";
import styles from "./styles";

const CustomButton = ({ newStyle, newStyleText, text, ...restProps }) => {
  return (
    <Pressable style={{ ...styles.container, ...newStyle }} {...restProps}>
      <Text style={{ ...styles.text, ...newStyleText }}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
