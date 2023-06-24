import { COLORS, EMAIL_REGEX } from "../../../constants";
import { CustomButton, CustomInput, CustomText } from "../../../components";
import { Image, View } from "react-native";

import React from "react";
import { TextInput } from "react-native-paper";
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
    <View className="flex-1 justify-center items-center px-[2%] bg-white">
      <Image
        source={require("../../../assets/images/ForgotPassword.jpg")}
        className="w-full max-w-xs h-1/3 max-h-80"
        resizeMode="contain"
      />
    <CustomText newStyle={{textAlign:"justify"}} text={"Ingrese correo electronico, se le enviara un email para reestablecer su contraseña."}/>
        

      <CustomInput
        name="email"
        control={control}
        label="Correo electronico"
        left={<TextInput.Icon icon="email" />}
        rules={{
          required: "Email es obligatorio.",
          pattern: {
            value: EMAIL_REGEX.email_regex,
            message: "Email es invalido.",
          },
        }}
      />
      <CustomButton
        text="Reestablecer Contraseña"
        mode="elevated"
        buttonColor={COLORS.green}
        textColor={COLORS.white}
        onPress={handleSubmit(onSendNewPasswordPressed)}
      />
    </View>
  );
};

export default ForgotPassword;
