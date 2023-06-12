import React, { useState } from "react";

import AuthNavigator from "./AuthNavigator";
import BottonTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

const index = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId ? <BottonTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default index;
