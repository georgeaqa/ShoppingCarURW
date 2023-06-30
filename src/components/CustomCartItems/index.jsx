import CustomIcon, { Icons } from "../CustomIcon";
import { Image, TouchableOpacity, View } from "react-native";

import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import React from "react";
import { useTheme } from "react-native-paper";

const CustomCartItems = ({ item, onDelete, onIncrease, onReduce }) => {
  const theme = useTheme();
  return (
    <Card className="m-1 rounded-3xl">
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
              newStyle={{ color: theme.colors.text }}
            />
            <CustomText
              variant="labelLarge"
              text={"Precio: $" + item.price}
              newStyle={{ color: theme.colors.text }}
            />
            <View className="flex-row items-center">
              <CustomText
                variant="labelLarge"
                text={"Cantidad: " + item.quantity + " "}
                newStyle={{ color: theme.colors.text }}
              />
              <TouchableOpacity onPress={() => onReduce(item.idCharacter)}>
                <CustomIcon
                  name="md-remove-circle"
                  type={Icons.Ionicons}
                  color={theme.colors.redButton}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIncrease(item.idCharacter)}>
                <CustomIcon
                  name="md-add-circle"
                  type={Icons.Ionicons}
                  color={theme.colors.greenButton}
                />
              </TouchableOpacity>
            </View>
            <CustomText
              variant="labelLarge"
              text={"Total: $" + item.price * item.quantity}
              newStyle={{ color: theme.colors.text }}
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
            color={theme.colors.redButton}
          />
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

export default CustomCartItems;
