import { COLORS, EMAIL_REGEX } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, Text, View } from "react-native";

import React from "react";
import { sendResetPassword } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const ForgotPassword = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSendNewPasswordPressed = (data) => {
    dispatch(sendResetPassword(data.email));
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-center items-center px-[5%] bg-white">
      <Image
        source={require("../../../assets/images/ForgotPassword.jpg")}
        className="w-full max-w-xs h-1/3 max-h-80"
        resizeMode="contain"
      />
      <Text className="text-xl w-full" style={{fontFamily:"UrbanRivals"}}>
        Ingrese correo electronico, se le enviara una nueva contraseña
      </Text>
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
      <CustomButton
        text="Recuperar Contraseña"
        className="bg-[#5cb85c]"
        newStyleText={{ color: COLORS.white }}
        onPress={handleSubmit(onSendNewPasswordPressed)}
      />
    </View>
  );
};

export default ForgotPassword;
