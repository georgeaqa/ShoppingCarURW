import { Image, ScrollView, View } from "react-native";

import { Card } from "react-native-paper";
import { CustomText } from "../../../../components";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "react-native-paper";

const formatDay = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

const OrderDetailScreen = () => {
  const theme =useTheme();
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  return (
    <View className=" flex-1 justify-between" style={{backgroundColor:theme.colors.background}}>
      <View className="flex-1">
        <View className="px-1 border-b-2 border-[#FFD700]">
          <CustomText
            text={"Fecha de compra: " + formatDay(selectedOrder.date)}
          />
          <CustomText text={"Detalle de pedido:"} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {selectedOrder.items.map((item) => (
            <Card
              className="m-2 rounded-2xl"
              key={item.idCharacter}
            >
              <Card.Content className="flex-row">
                <Image
                  source={item.imageSource}
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                />
                <View className="justify-between">
                  <CustomText text={"Nombre: " + item.nameCharacter} />
                  <CustomText text={"Precio: $" + item.price} />
                  <CustomText text={"Cantidad: " + item.quantity} />
                  <CustomText text={"Total: $" + item.price * item.quantity} />
                </View>
              </Card.Content>
            </Card>
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
