import { CustomButton, CustomInput } from "../../../components";
import { Image, Text, View, useWindowDimensions } from "react-native";

import { ROUTES } from "../../../constants";
import React from "react";
import styles from "./styles";

const ForgotPassword = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const onSendNewPasswordPressed = () => {
    console.warn("Nueva Contraseña Enviada");
    navigation.navigate(ROUTES.LOGIN);
  };
  return (
    <View className="flex-1 justify-center items-center px-[5%] bg-white">
      <Image
        source={require("../../../assets/images/ForgotPassword.jpg")}
        className="w-full max-w-xs h-1/3 max-h-80"
        resizeMode="contain"
      />
      <Text className="text-xl">
        Ingrese correo electronico, se le enviara una nueva contraseña
      </Text>
      <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Correo electronico"
      />
      <CustomButton
        text="Recuperar Contraseña"
        className="bg-[#5cb85c]"
        newStyleText={styles.buttonText}
        onPress={onSendNewPasswordPressed}
      />
    </View>
  );
};

export default ForgotPassword;
