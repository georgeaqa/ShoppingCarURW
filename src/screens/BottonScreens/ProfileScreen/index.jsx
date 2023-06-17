import { CustomButton, CustomText } from "../../../components";
import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../../constants";
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
    <View className="flex-1 justify-between items-center p-[2%]">
      <View className="w-full items-center">
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: userData.imageUri }}
        />
        <View className="w-full my-2">
          <CustomText text={"Nombre: " + userData.name} />
          <CustomText text={"Apellido: " + userData.lastName} />
          <CustomText text={"Email: " + userData.email} />
        </View>
      </View>

      <CustomButton
        text="Desconectar"
        onPress={() => handleLogout()}
        className="bg-[#0000FF]"
        newStyleText={{ color: COLORS.white }}
      />
    </View>
  );
};

export default Profile;
