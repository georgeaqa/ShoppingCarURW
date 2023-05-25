import { Image, Pressable, View } from "react-native";

import React from "react";

const CustomeFactionsItems = ({ item, onSelected }) => {
  return (
    <Pressable className="flex-1 m-[1%]" onPress={() => onSelected(item)}>
      <View style={{ backgroundColor: item.colorfaction }}>
        <View className="w-full border rounded border-[#FFD700] h-24">
          <Image
            className="w-full h-full"
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CustomeFactionsItems;
