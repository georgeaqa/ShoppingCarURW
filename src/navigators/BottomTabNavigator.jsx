import { COLORS, ROUTES } from "../constants";
import { OrderCar, Profile, ShoppingCar } from "../screens";

import { CustomText } from "../components";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.PROFILE}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.gold },
      }}
    >
      <BottomTab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="user" size={20} />
              <CustomText text={"Perfil"} />
            </>
          ),
        }}
      />

      <BottomTab.Screen
        name={ROUTES.FACTION_BTAB}
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="shop" size={20} />
              <CustomText text={"Productos"} />
            </>
          ),
        }}
      />

      <BottomTab.Screen
        name={ROUTES.SHOPPINGCAR}
        component={ShoppingCar}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="shopping-cart" size={20} />
              <CustomText text={"Carrito"} />
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name={ROUTES.ORDERCAR}
        component={OrderCar}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="list" size={20} />
              <CustomText text={"Ordenes"} />
            </>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
