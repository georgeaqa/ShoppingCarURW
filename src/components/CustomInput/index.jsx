import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";

const CustomInput = ({ newStyle, icon, ...restProps }) => {
  return <TextInput style={{ ...styles.input, ...newStyle }} {...restProps} />;
};

export default CustomInput;
