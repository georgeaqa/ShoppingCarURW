import { CustomButton, CustomInput } from "../../../components";
import { Image, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";

import { ROUTES } from "../../../constants";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { height } = useWindowDimensions();
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
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Logo.png")}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        newStyle={styles.input}
        placeholder="Correo electronico"
        value={email}
        setValue={setEmail}
      />

      <CustomInput
        newStyle={styles.input}
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Conectarse"
        onPress={onLoginPressed}
        newStyle={styles.buttonPrimary}
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
