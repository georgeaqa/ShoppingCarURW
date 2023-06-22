import { TouchableOpacity, View } from "react-native";

import CustomText from "../CustomText";
import React from "react";

const formatDay = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const CustomOrderItems = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      className="m-1 p-1 border rounded border-[#FF0000]"
      onPress={() => onSelected(item)}
    >
      <View>
        <CustomText text={"Orden: " + item.id}></CustomText>
        <CustomText text={"Fecha de compra: " + formatDay(item.date)} />
        <CustomText text={"Total: " + item.total} />
      </View>
    </TouchableOpacity>
  );
};

export default CustomOrderItems;
