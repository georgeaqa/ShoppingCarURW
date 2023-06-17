import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthNavigator from "./AuthNavigator";
import BottonTabNavigator from "./BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { getUserData } from "../store/actions/profile.action";

const index = () => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);

  idToken ? dispatch(getUserData(idToken)) : null;

  const localId = useSelector((state) => state.auth.localId);

  return (
    <NavigationContainer>
      {localId ? <BottonTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default index;
