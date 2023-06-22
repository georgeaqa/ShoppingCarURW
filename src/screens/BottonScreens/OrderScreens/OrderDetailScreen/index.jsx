import { FlatList, Image, ScrollView, View } from "react-native";

import { CustomText } from "../../../../components";
import React from "react";
import { useSelector } from "react-redux";

const OrderDetailScreen = () => {
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  return (
    <View className=" flex-1 p-1 bg-white justify-between">
      <View className="flex-1">
        <CustomText text={"Detalle de orden:"} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {selectedOrder.items.map((item) => (
            <View className="m-1 p-1 border border-[#FF0000] flex-row items-center" key={item.idCharacter}>
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
      <View className="flex-2">
        <CustomText text={"Precio Total: $" + selectedOrder.total} />
      </View>
    </View>
  );
};
export default OrderDetailScreen;
