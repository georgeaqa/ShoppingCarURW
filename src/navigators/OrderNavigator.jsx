import { COLORS, ROUTES } from "../constants";
import {
 OrderCar,
 OrderDetailScreen
} from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ORDERCAR}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "UrbanRivals",
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.ORDERCAR}
        component={OrderCar}
        options={{
          headerStyle: {
            backgroundColor: COLORS.gold,
          },
          title: "ORDENES",
        }}
      />
      <Stack.Screen
        name={ROUTES.ORDERDETAIL}
        component={OrderDetailScreen}
        options={({ route }) => ({
          title: route.params.id,
          headerStyle: {
            backgroundColor: COLORS.gold,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
