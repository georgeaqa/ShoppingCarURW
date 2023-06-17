import { COLORS, DIMENSIONS } from "../../../constants";
import { CustomButton, CustomText } from "../../../components";
import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserData } from "../../../store/actions/profile.action";
import { logOut } from "../../../store/actions/auth.action";

const Profile = () => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    dispatch(getUserData(localId));
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <View className="flex-1 justify-between items-center p-[2%] bg-white">
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
          <CustomText text={"Nombre: " + userData.name} />
          <CustomText text={"Apellido: " + userData.lastName} />
          <CustomText text={"Email: " + userData.email} />
        </View>
      </View>
      <View className="w-full items-center">
        <CustomButton
          text="Editar perfil"
          className="bg-[#2cec2c] shadow-md shadow-[#2cec2c]"
          newStyleText={{ color: COLORS.white }}
        />
        <CustomButton
          text="Desconectar"
          onPress={() => handleLogout()}
          className="bg-[#0000FF] shadow-md shadow-[#0000FF]"
          newStyleText={{ color: COLORS.white }}
        />
        <CustomButton
          text="Eliminar Cuenta"
          className="bg-[#FF0000] shadow-md shadow-[#FF0000]"
          newStyleText={{ color: COLORS.white }}
        />
      </View>
    </View>
  );
};

export default Profile;
