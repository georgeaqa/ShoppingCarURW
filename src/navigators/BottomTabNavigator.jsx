import { COLORS, ROUTES } from "../constants";
import CustomIcon, { Icons } from "../components/CustomIcon";

import OrderNavigator from "./OrderNavigator";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import { ShoppingCar } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useTheme } from "react-native-paper";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme =useTheme();
  const characters = useSelector((state) => state.cart.characters);
  const TabArr = [
    {
      route: ROUTES.PROFILE_BTAB,
      label: "Perfil",
      type: Icons.MaterialCommunityIcons,
      activeIcon: "account",
      inActiveIcon: "account-outline",
      component: ProfileNavigator,
    },
    {
      route: ROUTES.FACTION_BTAB,
      label: "Productos",
      type: Icons.MaterialCommunityIcons,
      activeIcon: "storefront",
      inActiveIcon: "storefront-outline",
      component: ShopNavigator,
    },
    {
      route: ROUTES.SHOPPINGCAR,
      label: "Carrito",
      type: Icons.Ionicons,
      activeIcon: "cart",
      inActiveIcon: "cart-outline",
      component: ShoppingCar,
      badge: characters.length,
    },
    {
      route: ROUTES.ORDERCAR_BTAB,
      label: "Pedidos",
      type: Icons.Ionicons,
      activeIcon: "md-reorder-four",
      inActiveIcon: "md-reorder-four-outline",
      component: OrderNavigator,
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.PROFILE_BTAB}
      screenOptions={{     
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "UrbanRivals", fontSize: 15 },
        tabBarActiveTintColor: COLORS.gold,
        tabBarInactiveTintColor: theme.colors.inactiveTintBottomTab,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: theme.colors.activeBottomTab,
        tabBarStyle: { backgroundColor: COLORS.gold },
      }}
    >
      {TabArr.map((_, index) => {
        return (
          <BottomTab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarBadge: _.badge,
              tabBarIcon: ({ color, size, focused }) => (
                <CustomIcon
                  name={focused ? _.activeIcon : _.inActiveIcon}
                  type={_.type}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
