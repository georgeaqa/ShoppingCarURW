import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthNavigator from "./AuthNavigator";
import BottonTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { loadAPP } from "../store/actions/auth.action";

const index = () => {
  const localId = useSelector((state) => state.auth.localId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAPP());
  }, []);

  return (
    <NavigationContainer>
      {localId ? <BottonTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default index;
