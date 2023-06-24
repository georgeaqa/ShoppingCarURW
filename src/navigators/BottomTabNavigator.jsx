import { COLORS, DIMENSIONS, ROUTES } from "../constants";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import OrderNavigator from "./OrderNavigator";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { ShoppingCar } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const characters = useSelector((state) => state.cart.characters);
  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.PROFILE_BTAB}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.gold ,height:DIMENSIONS.height/12},
        tabBarLabelStyle: { fontFamily: "UrbanRivals", fontSize: 15 },
        tabBarActiveTintColor: "#2cec2c",
        tabBarInactiveTintColor: "#000",
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name={ROUTES.PROFILE_BTAB}
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name={ROUTES.FACTION_BTAB}
        component={ShopNavigator}
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name={ROUTES.SHOPPINGCAR}
        component={ShoppingCar}
        options={{
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={30} color={color} />
          ),
          tabBarBadge: characters.length,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.ORDERCAR_BTAB}
        component={OrderNavigator}
        options={{
          tabBarLabel: "Pedidos",
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
