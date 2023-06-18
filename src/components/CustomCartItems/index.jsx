import { COLORS, DIMENSIONS } from "../../constants";
import { Image, TouchableOpacity, View } from "react-native";

import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  return (
    <View
      className="flex-1/2 p-1  w-1/2"
      style={{ height: DIMENSIONS.height / 3 }}
    >
      <View className="border border-[#FFD700] w-full justify-center items-center">
        <Image
          className="w-full h-1/2"
          source={item.imageSource}
          resizeMode="contain"
        />
        <CustomText text={item.nameCharacter} />
        <CustomText text={"$" + item.price} />
        <View className="flex-row my-2">
          <CustomText text={"Cantidad: " + item.quantity} />
          <TouchableOpacity onPress={() => onReduce(item.idCharacter)}>
            <Ionicons name="md-remove-circle-outline" size={25} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onIncrease(item.idCharacter)}>
            <Ionicons name="md-add-circle-outline" size={25} color={"green"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.idCharacter)}>
          <Ionicons name="trash" size={25} color={COLORS.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCartItems;
