import { COLORS, DIMENSIONS, ROUTES } from "../../../../constants";
import { CustomButton, CustomText } from "../../../../components";
import { Image, Switch, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  changeDarkMode,
  changeLightMode,
  darkMode,
  getUserData,
  logOut,
} from "../../../../store/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";

import { reset_cart } from "../../../../store/actions/cart.action";
import {reset_orders} from "../../../../store/actions/order.action";
import { useTheme } from "react-native-paper";

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const userData = useSelector((state) => state.auth.userData);
  const mode1 = useSelector((state) => state.auth.mode);
  const [mode, setMode] = useState(mode1 === "Light" ? false : true);
  useEffect(() => {
    dispatch(getUserData(localId));
  }, []);

  const handleEditProfile = () => {
    navigation.navigate(ROUTES.PROFILE_EDIT);
  };
  const handleLogout = () => {
    dispatch(logOut(localId));
    dispatch(reset_cart());
  };

  const changeTheme = () => {
    let changeMode;
    if (mode) {
      changeMode = "Light";
      dispatch(changeLightMode(localId));
    } else {
      changeMode = "Dark";
      dispatch(changeDarkMode(localId));
    }
    dispatch(darkMode(changeMode));
  };

  return (
    <View
      className="flex-1 justify-between items-center p-2"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="w-full items-center">
        <View
          className="rounded-full border border-[#FFD700] shadow-2xl shadow-[#FFD700]"
          style={{
            width: DIMENSIONS.width / 2,
            height: DIMENSIONS.height / 4,
          }}
        >
          <Image
            className="w-full h-full rounded-full"
            source={{ uri: userData.imageUri }}
            resizeMode="cover"
          />
        </View>
        <View className="w-full my-2">
          <View className="h-10 justify-center">
            <CustomText
              text={"Nombres: " + userData.name}
              newStyle={{ color: theme.colors.text }}
            />
          </View>
          <View className="h-10 justify-center">
            <CustomText
              text={"Apellidos: " + userData.lastName}
              newStyle={{ color: theme.colors.text }}
            />
          </View>
          <View className="h-10 justify-center">
            <CustomText
              text={"Email: " + userData.email}
              newStyle={{ color: theme.colors.text }}
            />
          </View>
          <View className="items-center flex-row h-10">
            <CustomText
              text={"Dark Mode: "}
              newStyle={{ color: theme.colors.text }}
            />
            <Switch
              value={mode}
              onValueChange={() => changeTheme(setMode(!mode))}
            />
          </View>
        </View>
      </View>
      <View className="w-full items-center">
        <CustomButton
          text="Editar perfil"
          onPress={handleEditProfile}
          textColor={theme.colors.greenButton}
          mode="elevated"
        />
        <CustomButton
          text="Desconectar"
          onPress={() => handleLogout()}
          textColor={theme.colors.blueButton}
          mode="elevated"
        />
        <CustomButton
          text="Eliminar Cuenta"
          textColor={theme.colors.redButton}
          mode="elevated"
        />
      </View>
    </View>
  );
};

export default Profile;
