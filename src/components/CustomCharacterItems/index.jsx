import { Image, Text, TouchableOpacity, View } from "react-native";

import { DIMENSIONS } from "../../constants";
import React from "react";

const CustomCharacterItems = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      className="flex-1 justify-center m-2 border border-[#FFD700]"
      onPress={() => onSelected(item)}
    >
      <Text className="text-2xl text-center">{item.nameCharacter}</Text>
      <View style={{width:DIMENSIONS.width/2,height:DIMENSIONS.height/4}}>
        <Image
          className="w-full h-full"
          source={item.imageSource}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomCharacterItems;
