import { Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const formatDay = date => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const CustomOrderItems = ({ item, onDelete }) => {
  return (
    <View >
      <View>
        <Text >{formatDay(item.date)}</Text>
        <Text >Total: {item.total}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="md-trash" color={"red"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomOrderItems;