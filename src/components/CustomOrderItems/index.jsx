import { TouchableOpacity, View } from "react-native";

import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import React from "react";
import { useTheme } from "react-native-paper";

const formatDay = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const CustomOrderItems = ({ item, onSelected }) => {
  const theme = useTheme();
  return (
    <Card className="m-2 p-2 rounded-2xl">
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View>
          <CustomText
            text={"Pedido: " + item.id}
            newStyle={{ color: theme.colors.text }}
          />
          <CustomText
            text={"Fecha de compra: " + formatDay(item.date)}
            newStyle={{ color: theme.colors.text }}
          />
          <CustomText
            text={"Precio total: " + item.total}
            newStyle={{ color: theme.colors.text }}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CustomOrderItems;
