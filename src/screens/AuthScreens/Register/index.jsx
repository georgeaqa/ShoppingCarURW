import { CustomButton, CustomInput } from "../../../components";
import { Image, View } from "react-native";
import React, { useState } from "react";

import { COLORS } from "../../../constants";
import { signUp } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("test@test.comp");
  const [password, setPassword] = useState("123456");
  const onRegisterPressed = () => {
    dispatch(signUp(email, password));
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-center items-center px-[5%] bg-white">
      <Image
        source={require("../../../assets/images/Register.jpg")}
        className="w-full max-w-xs h-1/3 max-h-80 "
        resizeMode="contain"
      />
      {/* <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Nombres y Apellidos"
      /> */}
      <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Correo electronico"
      />
      <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      {/* <CustomInput
        className="border rounded border-[#FFFF00]"
        placeholder="Repetir contraseña "
        secureTextEntry={true}
      /> */}
      <CustomButton
        text="Registrar"
        className="bg-[#5cb85c]"
        newStyleText={{ color: COLORS.white }}
        onPress={() => onRegisterPressed()}
      />
    </View>
  );
};

export default Register;
