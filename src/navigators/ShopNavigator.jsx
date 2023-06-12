import { COLORS, ROUTES } from "../constants";
import {
  CharacterDetailScreen,
  CharacterScreen,
  FactionScreen,
} from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.FACTION}
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name={ROUTES.FACTION}
        component={FactionScreen}
        options={{
          headerStyle: {
            backgroundColor: COLORS.gold,
          },
          title: "FACCIONES",
        }}
      />
      <Stack.Screen
        name={ROUTES.CHARACTER}
        component={CharacterScreen}
        options={({ route }) => ({
          title: route.params.nameFactions,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
      <Stack.Screen
        name={ROUTES.CHARACTER_DETAIL}
        component={CharacterDetailScreen}
        options={({ route }) => ({
          title: route.params.nameCharacter,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
