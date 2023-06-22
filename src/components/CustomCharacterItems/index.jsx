import { Image, TouchableOpacity, View } from "react-native";

import CustomText from "../CustomText";
import { DIMENSIONS } from "../../constants";
import React from "react";

const CustomCharacterItems = ({ item, onSelected }) => {
  return (
    <View
      className="flex-1/2 p-1  w-1/2"
      style={{ height: DIMENSIONS.height / 4}}
    >
      <TouchableOpacity
        className="border-2 border-[#FF0000] w-full justify-center items-center rounded-2xl"
        onPress={() => onSelected(item)}
      >
        <CustomText text={item.nameCharacter} />

        <Image
          className="w-full h-5/6"
          source={item.imageSource}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomCharacterItems;
