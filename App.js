import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import AuthNavigator from "./src/navigators/AuthNavigator";
import { Provider } from "react-redux";
import React from "react";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "DancingScript-VariableFont_wght": require("./src/assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AuthNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
