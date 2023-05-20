import { CustomButton, CustomInput } from "../../../components";
import { Image, Text, View, useWindowDimensions } from "react-native";

import { ROUTES } from "../../../constants";
import React from "react";
import styles from "./styles";

const ForgotPassword = ({navigation}) => {
  const { height } = useWindowDimensions();
  const onSendNewPasswordPressed = () => {
    console.warn("Nueva Contraseña Enviada");
    navigation.navigate(ROUTES.LOGIN);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/ForgotPassword.jpg")}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Ingrese correo electronico, se le enviara una nueva contraseña
      </Text>
      <CustomInput newStyle={styles.input} placeholder="Correo electronico" />
      <CustomButton
        text="Recuperar Contraseña"
        newStyle={styles.buttonSuccess}
        newStyleText={styles.buttonText}
        onPress={onSendNewPasswordPressed}
      />
    </View>
  );
};

export default ForgotPassword;
