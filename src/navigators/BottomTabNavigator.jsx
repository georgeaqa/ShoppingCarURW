import { COLORS, ROUTES } from "../constants";
import { FactionScreen, ShoppingCar } from "../screens";

import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.gold},
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
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;