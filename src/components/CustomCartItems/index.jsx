import { Image, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants";
import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  return (
    <Card className="m-1 px-2 py-1 border border-[#FF0000] rounded-2xl bg-white">
      <Card.Content className="flex-row justify-between">
        <View className="flex-row">
          
          <Image
            source={item.imageSource}
            resizeMode="contain"
            style={{ width: 90, height: 90 }}
          />
          <View className="justify-between">
            <CustomText
              variant="labelLarge"
              text={"Nombre: " + item.nameCharacter}
            />
            <CustomText variant="labelLarge" text={"Precio: $" + item.price} />
            <View className="flex-row items-center">
              <CustomText
                variant="labelLarge"
                text={"Cantidad: " + item.quantity + " "}
              />
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
            <CustomText variant="labelLarge" text={"Total: $" + item.price*item.quantity} />
          </View>
        </View>
        <TouchableOpacity
          className="justify-center"
          onPress={() => onDelete(item.idCharacter)}
        >
          <Ionicons name="trash" size={25} color={COLORS.red} />
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

export default CustomCartItems;
