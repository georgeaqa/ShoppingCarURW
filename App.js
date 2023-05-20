import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import AuthNavigator from "./src/navigators/AuthNavigator";
import React from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "DancingScript-VariableFont_wght": require("./src/assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.root}>
      <AuthNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
