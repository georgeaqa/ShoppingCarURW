import AuthNavigator from "./AuthNavigator";
import BottonTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const localId = useSelector((state) => state.auth.localId);

  return (
    <NavigationContainer>
      {localId ? <BottonTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default index;
