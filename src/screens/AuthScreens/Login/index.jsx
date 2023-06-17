import { COLORS, EMAIL_REGEX, ROUTES } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, ScrollView, View } from "react-native";

import React from "react";
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
        control={control}
        placeholder="Correo electronico"
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
        control={control}
        placeholder="Contraseña"
        secureTextEntry={true}
        rules={{ required: "Contraseña es obligatorio." }}
      />
      <CustomButton
        text="Conectarse"
        onPress={handleSubmit(onLoginPressed)}
        className="bg-[#0000FF]"
        newStyleText={{ color: COLORS.white }}
      />
      <CustomButton
        text="Olvido contraseña?"
        onPress={onForgotPasswordPressed}
        newStyleText={{ color: COLORS.tertiaryColor }}
      />

      <CustomButton
        text="Registrarse"
        onPress={onRegisterPressed}
        newStyleText={{ color: COLORS.tertiaryColor }}
      />
    </View>
  );
};

export default Login;
