import { COLORS, ROUTES } from "../constants";
import { OrderCar, ShoppingCar } from "../screens";

import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
    initialRouteName={ROUTES.FACTION_BTAB}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.gold },
      }}
    >
      <BottomTab.Screen
        name={ROUTES.FACTION_BTAB}
        component={ShopNavigator}
        options={{
          tabBarIcon: () => <Entypo name="shop" size={25} />,
        }}
      />

      <BottomTab.Screen
        name={ROUTES.SHOPPINGCAR}
        component={ShoppingCar}
        options={{
          tabBarIcon: () => <Entypo name="shopping-cart" size={25} />,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.ORDERCAR}
        component={OrderCar}
        options={{
          tabBarIcon: () => <Entypo name="list" size={25} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
