import { FlatList, Pressable, View } from "react-native";
import React, { useEffect } from "react";
import {
  getOrders,
  selectedOrder,
} from "../../../../store/actions/order.action";
import { useDispatch, useSelector } from "react-redux";

import { CustomOrderItems } from "../../../../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ROUTES } from "../../../../constants";

const OrderCar = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const localId = useSelector((state) => state.auth.localId);
  useEffect(() => {
    dispatch(getOrders(localId));
  }, []);

  const refreshOrders = () => {
    dispatch(getOrders(localId));
  };

  const handleSelectedOrder = (item) => {
    dispatch(selectedOrder(item.id)),
      navigation.navigate(ROUTES.ORDERDETAIL, { id: item.id });
  };

  const renderOrderItem = ({ item }) => (
    <CustomOrderItems item={item} onSelected={handleSelectedOrder} />
  );

  return (
    <View className="flex-1 justify-between bg-white">
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <Pressable className="items-center border-t-2 border-[#FFD700]" onPress={() => refreshOrders()}>
        <Ionicons name="ios-refresh-circle-outline" size={30} color="red" />
      </Pressable>
    </View>
  );
};

export default OrderCar;
