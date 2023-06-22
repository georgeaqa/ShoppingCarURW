import { FlatList, Image, ScrollView, View } from "react-native";

import { CustomText } from "../../../../components";
import React from "react";
import { useSelector } from "react-redux";

const formatDay = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const OrderDetailScreen = () => {
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  return (
    <View className=" flex-1 bg-white justify-between">
      <View className="flex-1">
        <View className="px-1 border-b-2 border-[#FFD700]">
          <CustomText text={"Fecha de compra: " + formatDay(selectedOrder.date)} />
          <CustomText text={"Detalle de pedido:"} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {selectedOrder.items.map((item) => (
            <View
              className="m-1 p-1 border border-[#FF0000] flex-row items-center rounded-2xl"
              key={item.idCharacter}
            >
              <Image
                source={item.imageSource}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
              <View>
                <CustomText text={"Nombre: " + item.nameCharacter} />
                <CustomText text={"Precio: $" + item.price} />
                <CustomText text={"Cantidad: " + item.quantity} />
                <CustomText text={"Total: $" + item.price * item.quantity} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="flex-2 px-1 items-center border-t-2 border-[#FFD700]">
        <CustomText text={"Precio Total: $" + selectedOrder.total} />
      </View>
    </View>
  );
};
export default OrderDetailScreen;
