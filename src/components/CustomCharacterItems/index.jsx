import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CustomCharacterItems = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      className="flex-1 justify-center m-2 border border-[#FFD700]"
      onPress={() => onSelected(item)}
    >
      <Text className="text-2xl text-center">{item.nameCharacter}</Text>
      <View style={styles.imageContainer}>
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
