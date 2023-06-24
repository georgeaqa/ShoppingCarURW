import { TouchableOpacity, View } from "react-native";

import { Card } from "react-native-paper";
import CustomText from "../CustomText";
import React from "react";

const formatDay = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const CustomOrderItems = ({ item, onSelected }) => {
  return (
    <Card className="m-2 p-2 rounded-2xl">
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View>
          <CustomText text={"Pedido: " + item.id}></CustomText>
          <CustomText text={"Fecha de compra: " + formatDay(item.date)} />
          <CustomText text={"Precio total: " + item.total} />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CustomOrderItems;
