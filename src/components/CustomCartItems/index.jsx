import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  return (
    <View className="my-1 flex-row justify-between bg-gray-400">
      <View className="flex-row">
        <Image
          className="w-20 h-20"
          source={item.imageSource}
          resizeMode="contain"
        />
        <View>
          <Text className="text-white" style={{ fontFamily: "UrbanRivals" }}>
            ID: {item.idCharacter}
          </Text>
          <Text className="text-white" style={{ fontFamily: "UrbanRivals" }}>
            nombre: {item.nameCharacter}
          </Text>
          <Text className="text-white" style={{ fontFamily: "UrbanRivals" }}>
            $ {item.price}
          </Text>
          <View className="flex-row ">
            <Text className="text-white" style={{ fontFamily: "UrbanRivals" }}>
              Cantidad:{" "}
            </Text>
            <TouchableOpacity onPress={() => onReduce(item.idCharacter)}>
              <Ionicons
                name="md-remove-circle-outline"
                size={20}
                color={"red"}
              />
            </TouchableOpacity>
            <Text className="text-white" style={{fontFamily: "UrbanRivals"}}> {item.quantity} </Text>
            <TouchableOpacity onPress={() => onIncrease(item.idCharacter)}>
              <Ionicons
                name="md-add-circle-outline"
                size={20}
                color={"green"}
              />
            </TouchableOpacity>
          </View>
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
