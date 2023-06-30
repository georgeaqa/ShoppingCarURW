import { Image, TouchableOpacity } from "react-native";

import { DIMENSIONS } from "../../constants";
import React from "react";
import { useTheme } from "react-native-paper";

const CustomeFactionsItems = ({ item, onSelected }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      className="flex-1 m-1 border rounded-3xl"
      onPress={() => onSelected(item)}
      style={{
        height: DIMENSIONS.height / 6,
        backgroundColor: item.colorfaction,
        borderColor: theme.colors.border,
      }}
    >
      <Image
        className="w-full h-full"
        source={item.imageSource}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default CustomeFactionsItems;
