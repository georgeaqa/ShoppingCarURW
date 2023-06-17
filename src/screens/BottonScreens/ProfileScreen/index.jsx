import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../../constants";
import { CustomButton } from "../../../components";
import React from "react";
import { logOut } from "../../../store/actions/auth.action";

const Profile = () => {
  const userData = useSelector((state) => state.user.userData);
const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <View className="flex-1 justify-between items-center p-[2%]">
      <View className="w-full">
        <Text style={{ fontFamily: "UrbanRivals" }}>
          Nombre: {userData.displayName}
        </Text>
        <Text style={{ fontFamily: "UrbanRivals" }}>
          Email: {userData.email}
        </Text>
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
