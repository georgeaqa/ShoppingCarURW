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
    <Card className="m-1 px-2 py-1 border rounded-2xl border-[#FF0000] bg-white">
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
