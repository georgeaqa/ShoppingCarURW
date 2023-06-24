import { COLORS, DIMENSIONS, ROUTES } from "../../../../constants";
import { CustomButton, CustomText } from "../../../../components";
import { Image, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserData } from "../../../../store/actions/profile.action";
import { logOut } from "../../../../store/actions/auth.action";
import { reset_cart } from "../../../../store/actions/cart.action";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const userData = useSelector((state) => state.user.userData);
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

  return (
    <View className="flex-1 justify-between items-center p-2 bg-white">
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
          onPress={handleEditProfile}
          buttonColor={COLORS.white}
          textColor={COLORS.green}
        />
        <CustomButton
          text="Desconectar"
          onPress={() => handleLogout()}
          buttonColor={COLORS.white}
          textColor={COLORS.blue}
        />
        <CustomButton
          text="Eliminar Cuenta"
          buttonColor={COLORS.white}
          textColor={COLORS.red}
        />
      </View>
    </View>
  );
};

export default Profile;
