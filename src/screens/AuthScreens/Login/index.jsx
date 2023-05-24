import { CustomButton, CustomInput } from "../../../components";
import { Image, View } from "react-native";
import React, { useState } from "react";

import { ROUTES } from "../../../constants";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const onLoginPressed = () => {
    navigation.navigate(ROUTES.FACTION);
  };
  const onRegisterPressed = () => {
    navigation.navigate(ROUTES.REGISTER);
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate(ROUTES.FORGOT_PASSWORD);
  };

  return (
    <View className="flex-1 justify-center items-center px-[5%] bg-white">
      <Image
        source={require("../../../assets/images/Logo.png")}
        className="w-full max-w-xs h-1/3 max-h-80 "
        resizeMode="contain"
      />

      <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Correo electronico"
        value={email}
        setValue={setEmail}
      />

      <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Conectarse"
        onPress={onLoginPressed}
        className="bg-[#0000FF]"
        newStyleText={styles.buttonTextPrimary}
      />
      <CustomButton
        text="Olvido contraseña?"
        onPress={onForgotPasswordPressed}
        newStyleText={styles.buttonTextTertiary}
      />
      <CustomButton
        text="Registrarse"
        onPress={onRegisterPressed}
        newStyleText={styles.buttonTextTertiary}
      />
    </View>
  );
};

export default Login;
