import { COLORS, ROUTES } from "../../../../constants";
import CustomIcon, { Icons } from "../../../../components/CustomIcon";
import { FlatList, Pressable, View } from "react-native";
import React, { useEffect } from "react";
import {
  getOrders,
  selectedOrder,
} from "../../../../store/actions/order.action";
import { useDispatch, useSelector } from "react-redux";

import { CustomOrderItems } from "../../../../components";
import { useTheme } from "react-native-paper";

const OrderCar = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const localId = useSelector((state) => state.auth.localId);
  useEffect(() => {
    dispatch(getOrders(localId));
  });

  const handleSelectedOrder = (item) => {
    dispatch(selectedOrder(item.id)),
      navigation.navigate(ROUTES.ORDERDETAIL, { id: item.id });
  };

  const renderOrderItem = ({ item }) => (
    <CustomOrderItems item={item} onSelected={handleSelectedOrder} />
  );

  return (
    <View
      className="flex-1 justify-between"
      style={{ backgroundColor: theme.colors.background }}
    >
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OrderCar;
