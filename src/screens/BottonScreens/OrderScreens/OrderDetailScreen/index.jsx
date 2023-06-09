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
  const theme = useTheme();
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  return (
    <View
      className=" flex-1 justify-between"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-1">
        <View className="mx-1 border-b-2 border-[#FFD700]">
          <CustomText
            text={"Fecha de compra: " + formatDay(selectedOrder.date)}
            newStyle={{ color: theme.colors.text }}
          />
          <CustomText
            text={"Detalle de pedido:"}
            newStyle={{ color: theme.colors.text }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {selectedOrder.items.map((item) => (
            <Card className="m-1 rounded-3xl" key={item.idCharacter}>
              <Card.Content className="flex-row">
                <Image
                  source={item.imageSource}
                  resizeMode="contain"
                  style={{ width: 100, height: 100 }}
                />
                <View className="justify-between">
                  <CustomText
                    text={"Nombre: " + item.nameCharacter}
                    newStyle={{ color: theme.colors.text }}
                  />
                  <CustomText
                    text={"Precio: $" + item.price}
                    newStyle={{ color: theme.colors.text }}
                  />
                  <CustomText
                    text={"Cantidad: " + item.quantity}
                    newStyle={{ color: theme.colors.text }}
                  />
                  <CustomText
                    text={"Total: $" + item.price * item.quantity}
                    newStyle={{ color: theme.colors.text }}
                  />
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
      <View className="flex-2 px-1 items-center border-t-2 border-[#FFD700]">
        <CustomText
          text={"Precio Total: $" + selectedOrder.total}
          newStyle={{ color: theme.colors.text }}
        />
      </View>
    </View>
  );
};
export default OrderDetailScreen;
