import { COLORS, EMAIL_REGEX, ROUTES } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, View } from "react-native";

import React from "react";
import { TextInput } from "react-native-paper";
import { signIn } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLoginPressed = (data) => {
    dispatch(signIn(data.email, data.password));
  };
  const onRegisterPressed = () => {
    navigation.navigate(ROUTES.REGISTER);
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate(ROUTES.FORGOT_PASSWORD);
  };

  return (
    <View className="flex-1 justify-center items-center px-[2%] bg-white">
      <Image
        source={require("../../../assets/images/Logo.png")}
        className="w-full max-w-xs h-1/3 max-h-80 "
        resizeMode="contain"
      />

      <CustomInput
        name="email"
        label="Correo electronico"
        control={control}
        left={<TextInput.Icon icon="email" />}
        rules={{
          required: "Email es obligatorio.",
          pattern: {
            value: EMAIL_REGEX.email_regex,
            message: "Email es invalido.",
          },
        }}
      />

      <CustomInput
        name="password"
        label="Contraseña"
        control={control}
        left={<TextInput.Icon icon="eye" />}
        secureTextEntry
        rules={{ required: "Contraseña es obligatorio." }}
      />

      <CustomButton
        text="Conectarse"
        onPress={handleSubmit(onLoginPressed)}
        mode="elevated"
        buttonColor={COLORS.blue}
        textColor={COLORS.white}
      />
      <CustomButton
        text="Olvido contraseña?"
        onPress={onForgotPasswordPressed}
        mode="outlined"
        textColor={COLORS.red}
      />
      <CustomButton
        text="Registrarse"
        onPress={onRegisterPressed}
        mode="outlined"
        textColor={COLORS.red}
      />
    </View>
  );
};

export default Login;
