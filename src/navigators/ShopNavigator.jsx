import { COLORS, ROUTES } from "../constants";
import { ClanScreen, FactionScreen } from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.gold,
      
        },
        headerTitleStyle:{
          fontFamily: "DancingScript-VariableFont_wght",
          color:COLORS.white,
          fontSize:25,
        }
      }}
    >
      <Stack.Screen
        name={ROUTES.FACTION}
        component={FactionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTES.CLAN}
        component={ClanScreen}
        options={({ route }) => ({
          title: route.params.nameFaction,
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
