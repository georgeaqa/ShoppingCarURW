import CustomIcon, { Icons } from "../CustomIcon";
import { Image, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants";
import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import React from "react";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  return (
    <Card className="m-2 p-1 rounded-2xl">
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
                <CustomIcon
                  name="md-remove-circle"
                  type={Icons.Ionicons}
                  color={COLORS.red}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIncrease(item.idCharacter)}>
                <CustomIcon
                  name="md-add-circle"
                  type={Icons.Ionicons}
                  color={COLORS.green}
                />
              </TouchableOpacity>
            </View>
            <CustomText
              variant="labelLarge"
              text={"Total: $" + item.price * item.quantity}
            />
          </View>
        </View>
        <TouchableOpacity
          className="justify-center"
          onPress={() => onDelete(item.idCharacter)}
        >
          <CustomIcon
            name="delete-forever-outline"
            type={Icons.MaterialCommunityIcons}
            size={25}
            color={COLORS.red}
          />
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

export default CustomCartItems;
