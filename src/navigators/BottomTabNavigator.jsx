import { COLORS, ROUTES } from "../constants";

import { CustomText } from "../components";
import Entypo from "@expo/vector-icons/Entypo";
import OrderNavigator from "./OrderNavigator";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { ShoppingCar } from "../screens";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useSelector } from "react-redux";

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  const characters = useSelector((state) => state.cart.characters);
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={ROUTES.PROFILE_BTAB}
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => <Entypo name="user" size={25} />,
          tabBarLabel: <CustomText text={"Perfil"} />,
        }}
      />

      <BottomTab.Screen
        name={ROUTES.FACTION_BTAB}
        component={ShopNavigator}
        options={{
          tabBarColor: COLORS.gold,
          tabBarIcon: () => <Entypo name="shop" size={25} />,
          tabBarLabel: <CustomText text="Productos" />,
        }}
      />

      <BottomTab.Screen
        name={ROUTES.SHOPPINGCAR}
        component={ShoppingCar}
        options={{
          tabBarIcon: () => <Entypo name="shopping-cart" size={25} />,
          tabBarLabel: <CustomText text="Carrito" />,
          tabBarBadge: characters.length,
        }}
      />
      <BottomTab.Screen
        name={ROUTES.ORDERCAR_BTAB}
        component={OrderNavigator}
        options={{
          tabBarIcon: () => <Entypo name="list" size={25} />,
          tabBarLabel: <CustomText text="Pedidos" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
