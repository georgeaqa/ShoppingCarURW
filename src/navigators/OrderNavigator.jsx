import { COLORS, ROUTES } from "../constants";
import {
 OrderCar,
 OrderDetailScreen
} from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ORDERCAR}
      screenOptions={{
        animation:"slide_from_right",
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "UrbanRivals",
          
        },
        headerStyle:{
          backgroundColor: COLORS.gold,
        }
      }}
    >
      <Stack.Screen
        name={ROUTES.ORDERCAR}
        component={OrderCar}
        options={{
          title: "PEDIDOS",
        }}
      />
      <Stack.Screen
        name={ROUTES.ORDERDETAIL}
        component={OrderDetailScreen}
        options={({ route }) => ({
          title: route.params.id,
        })}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
