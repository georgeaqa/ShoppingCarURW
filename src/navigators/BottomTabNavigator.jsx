import { COLORS, ROUTES } from "../constants";

import { CustomText } from "../components";
import Entypo from "@expo/vector-icons/Entypo";
import OrderNavigator from "./OrderNavigator";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { ShoppingCar } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.PROFILE_BTAB}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.gold },
      }}
    >
      <BottomTab.Screen
        name={ROUTES.PROFILE_BTAB}
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="user" size={15} />
              <CustomText text={"Perfil"} newStyle={{fontSize:15}}/>
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
              <Entypo name="shop" size={15} />
              <CustomText text={"Productos"} newStyle={{fontSize:15}}/>
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
              <Entypo name="shopping-cart" size={15} />
              <CustomText text={"Carrito"} newStyle={{fontSize:15}}/>
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name={ROUTES.ORDERCAR_BTAB}
        component={OrderNavigator}
        options={{
          tabBarIcon: () => (
            <>
              <Entypo name="list" size={15} />
              <CustomText text={"Pedidos"} newStyle={{fontSize:15}}/>
            </>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
