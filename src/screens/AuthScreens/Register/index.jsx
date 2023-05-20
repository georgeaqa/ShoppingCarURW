import { CustomButton, CustomInput } from "../../../components";
import { Image, View, useWindowDimensions } from "react-native";

import { ROUTES } from "../../../constants";
import React from "react";
import styles from "./styles";

const Register = ({navigation}) => {
  const { height } = useWindowDimensions();
  const onRegisterPressed = () => {
    console.warn("Cuenta ha sido creada");
    navigation.navigate(ROUTES.LOGIN);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/Register.jpg")}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput newStyle={styles.input} placeholder="Nombres y Apellidos" />
      <CustomInput
        newStyle={styles.input}
        placeholder="Correo electronico"
      />
      <CustomInput
        newStyle={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <CustomInput
        newStyle={styles.input}
        placeholder="Repetir contraseña "
        secureTextEntry={true}
      />
      <CustomButton
        text="Registrar"
        newStyle={styles.buttonSuccess}
        newStyleText={styles.buttonText}
        onPress={onRegisterPressed}
      />
    </View>
  );
};

export default Register;
