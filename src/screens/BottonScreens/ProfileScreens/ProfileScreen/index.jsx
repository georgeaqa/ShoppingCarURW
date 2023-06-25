import { COLORS, DIMENSIONS, ROUTES } from "../../../../constants";
import { CustomButton, CustomText } from "../../../../components";
import { Image, Switch, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  darkMode,
  getUserData,
} from "../../../../store/actions/profile.action";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../../../store/actions/auth.action";
import { reset_cart } from "../../../../store/actions/cart.action";
import { useTheme } from "react-native-paper";

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const userData = useSelector((state) => state.user.userData);
  const [Mode, setMode] = useState(false);
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
    dispatch(darkMode(Mode));
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
            <CustomText text={"Nombres: " + userData.name} />
          </View>
          <View className="h-10 justify-center">
            <CustomText text={"Apellidos: " + userData.lastName} />
          </View>
          <View className="h-10 justify-center">
            <CustomText text={"Email: " + userData.email} />
          </View>
          <View className="items-center flex-row h-10">
            <CustomText text={"Dark Mode: "} />
            <Switch
              value={Mode}
              onValueChange={() => changeTheme(setMode(!Mode))}
            />
          </View>
        </View>
      </View>
      <View className="w-full items-center">
        <CustomButton
          text="Editar perfil"
          onPress={handleEditProfile}
          textColor={COLORS.green}
          mode="outlined"
        />
        <CustomButton
          text="Desconectar"
          onPress={() => handleLogout()}
          textColor={COLORS.blue}
          mode="outlined"
        />
        <CustomButton
          text="Eliminar Cuenta"
          textColor={COLORS.red}
          mode="outlined"
        />
      </View>
    </View>
  );
};

export default Profile;
