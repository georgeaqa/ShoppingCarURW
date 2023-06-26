import { COLORS, ROUTES } from "../constants";
import { EditProfileScreen, Profile } from "../screens";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.PROFILE}
      screenOptions={{
        animation:"slide_from_right",
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "UrbanRivals",
        },
        headerStyle: {
          backgroundColor: COLORS.gold,
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          title: "PERFIL",
        }}
      />
      <Stack.Screen
        name={ROUTES.PROFILE_EDIT}
        component={EditProfileScreen}
        options={{
          title: "EDITAR PERFIL",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
