import { COLORS, EMAIL_REGEX } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, View } from "react-native";

import React from "react";
import { signUp } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Register = ({navigation}) => {
  const { control, handleSubmit ,watch} = useForm();
  const pwd= watch("password");
  const dispatch = useDispatch();

  const onRegisterPressed = (data) => {
    dispatch(signUp(data.email, data.password));
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-center items-center px-[5%] bg-white">
      <Image
        source={require("../../../assets/images/Register.jpg")}
        className="w-full max-w-xs h-1/3 max-h-80 "
        resizeMode="contain"
      />

      <CustomInput
        name="email"
        className="border rounded border-[#FFFF00]"
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
        className="border rounded border-[#FFFF00]"
        control={control}
        placeholder="Contraseña"
        secureTextEntry={true}
        rules={{
          required: "Contraseña es obligatorio.",
          minLength: {
            value: 6,
            message: "La contraseña debe tener minimo 6 caracteres.",
          },
        }}
      />
      <CustomInput
        name="password"
        className="border rounded border-[#FFFF00]"
        control={control}
        placeholder="Contraseña"
        secureTextEntry={true}
        rules={{
          validate: (value) => value === pwd || "Las contraseñas no coinciden.",
        }}
      />
      <CustomButton
        text="Registrar"
        className="bg-[#5cb85c]"
        newStyleText={{ color: COLORS.white }}
        onPress={handleSubmit(onRegisterPressed)}
      />
    </View>
  );
};

export default Register;
