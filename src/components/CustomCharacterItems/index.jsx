import { Image, TouchableOpacity, View } from "react-native";

import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import { DIMENSIONS } from "../../constants";
import React from "react";
import { useTheme } from "react-native-paper";

const CustomCharacterItems = ({ item, onSelected }) => {
  const theme = useTheme();
  return (
    <View
      className="flex-1/2 p-1 w-1/2"
      style={{ height: DIMENSIONS.height / 3.5 }}
    >
      <Card
        className="rounded-3xl"
      >
        <TouchableOpacity
          className="w-full justify-center items-center h-full"
          onPress={() => onSelected(item)}
        >
          <CustomText
            variant="titleMedium"
            text={item.nameCharacter}
            newStyle={{ color: theme.colors.text }}
          />

          <Image
            className="w-full h-5/6"
            source={item.imageSource}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default CustomCharacterItems;
