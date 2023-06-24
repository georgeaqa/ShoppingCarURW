import { Button, Card } from "react-native-paper";
import { COLORS, EMAIL_REGEX, ROUTES } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, View } from "react-native";

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
      <Card className="w-full border border-[#FFD700] m-2 bg-white">
        <Card.Content>
          <CustomInput
            name="email"
            label="Correo electronico"
            control={control}
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
            secureTextEntry
            rules={{ required: "Contraseña es obligatorio." }}
          />
        </Card.Content>
      </Card>
      <CustomButton
        text="Conectarse"
        onPress={handleSubmit(onLoginPressed)}
        buttonColor={COLORS.blue}
        textColor={COLORS.white}
      />
      <CustomButton
        text="Olvido contraseña?"
        onPress={onForgotPasswordPressed}
        buttonColor={COLORS.white}
        textColor={COLORS.red}
      />
      <CustomButton
        text="Registrarse"
        onPress={onRegisterPressed}
        buttonColor={COLORS.white}
        textColor={COLORS.red}
      />
    </View>
  );
};

export default Login;
