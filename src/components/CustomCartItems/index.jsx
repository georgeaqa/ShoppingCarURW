import { COLORS, DIMENSIONS } from "../../constants";
import { Image, TouchableOpacity, View } from "react-native";

import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  return (
    <View className="m-1 px-2 py-1 border border-[#FF0000] rounded-2xl flex-row justify-between">
      <View className="flex-row">
        <Image
          source={item.imageSource}
          resizeMode="contain"
          style={{ width: 90, height: 90 }}
        />
        <View>
          <CustomText text={"Nombre: " + item.nameCharacter} />
          <CustomText text={"Precio: $" + item.price} />
          <View className="flex-row">
            <CustomText text={"Cantidad: " + item.quantity + " "} />
            <TouchableOpacity onPress={() => onReduce(item.idCharacter)}>
              <Ionicons
                name="md-remove-circle-outline"
                size={25}
                color={"red"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onIncrease(item.idCharacter)}>
              <Ionicons
                name="md-add-circle-outline"
                size={25}
                color={"green"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="justify-center"
        onPress={() => onDelete(item.idCharacter)}
      >
        <Ionicons name="trash" size={25} color={COLORS.red} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomCartItems;
