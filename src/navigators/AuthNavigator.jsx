import { ForgotPassword, Login, Register } from "../screens";

import BottomTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES } from "../constants";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.FACTION}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{
            title: "Recuperar Contraseña",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={Register}
          options={{ title: "Registrarse", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;