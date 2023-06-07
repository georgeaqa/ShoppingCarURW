import { Image, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const CustomCartItems = ({ item, onDelete }) => {
  return (
    <View className="my-1 flex-row justify-between bg-gray-400">
      <View className="flex-row">
        <Image
          className="w-20 h-20"
          source={item.imageSource}
          resizeMode="contain"
        />
        <View>
          <Text className="text-white">ID: {item.idCharacter}</Text>
          <Text className="text-white">nombre: {item.nameCharacter}</Text>
          <Text className="text-white">$ {item.price}</Text>
          <Text className="text-white">Cantidad: {item.quantity}</Text>
        </View>
      </View>
      <View className="justify-center">
        <TouchableOpacity onPress={() => onDelete(item.idCharacter)}>
          <Ionicons name="trash" size={24} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCartItems;
