import { COLORS, ROUTES } from "../constants";
import { CharacterScreen, FactionScreen } from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.FACTION}
        component={FactionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.CHARACTER}
        component={CharacterScreen}
        options={({ route }) => ({
          title: route.params.nameClan,
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerTintColor: COLORS.white,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
