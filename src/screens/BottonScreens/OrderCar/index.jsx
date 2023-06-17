import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CustomOrderItems } from "../../../components";
import { getOrders } from "../../../store/actions/order.action";

const OrderCar = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);
  const localId= useSelector((state) => state.auth.localId);
  useEffect(() => {
    dispatch(getOrders(localId));
  }, [orders]);

  const handleDeleteOrder = () => {
    console.log("Eliminar orden");
  };
  const renderOrderItem = ({ item }) => (
    <CustomOrderItems item={item} onDelete={handleDeleteOrder} />
  );

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrderCar;
