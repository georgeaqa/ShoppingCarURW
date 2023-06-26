import { DARKTHEME, LIGHTTHEME } from "../constants";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthNavigator from "./AuthNavigator";
import BottonTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { loadAPP } from "../store/actions/auth.action";

const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LIGHTTHEME.colors,
  },
};

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DARKTHEME.colors,
  },
};
const index = () => {
  const localId = useSelector((state) => state.auth.localId);
  const mode = useSelector((state) => state.auth.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAPP());
  }, []);
  const theme = mode==="Dark" ? DarkTheme : LightTheme;
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {localId ? <BottonTabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default index;
