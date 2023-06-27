import * as ImagePicker from "expo-image-picker";

import { COLORS, EMAIL_REGEX } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";

import { TextInput } from "react-native-paper";
import { signUp } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Register = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const [imageUri, setImageUri] = useState(
    "https://s.acdn.ur-img.com/img/noname.jpg"
  );

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };
  const dispatch = useDispatch();

  const onRegisterPressed = (data) => {
    dispatch(
      signUp(data.name, data.lastName, data.email, data.password, imageUri)
    );
    navigation.goBack();
  };
  return (
    <View className="flex-1 justify-between items-center px-[2%] py-[2%] bg-white">
      <ScrollView
        className="w-full"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-full bg-white items-center">
          <Pressable
            className="w-[300px] h-[300px] border"
            onPress={() => pickImage()}
            tittle="imagen"
          >
            <Image
              className="w-full h-full"
              source={{ uri: imageUri }}
              resizeMode="contain"
            />
          </Pressable>
          <CustomInput
            name="name"
            control={control}
            label="Nombres"
            left={<TextInput.Icon icon="account" />}
            rules={{
              required: "Nombre es obligatorio.",
              minLength: {
                value: 2,
                message: "El nombre debe tener minimo 2 caracteres.",
              },
            }}
          />
          <CustomInput
            name="lastName"
            control={control}
            label="Apellidos"
            left={<TextInput.Icon icon="account" />}
            rules={{
              required: "Apellido es obligatorio.",
              minLength: {
                value: 2,
                message: "El apellido debe tener minimo 2 caracteres.",
              },
            }}
          />
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
          <CustomInput
            name="password"
            control={control}
            label="Contraseña"
            secureTextEntry={true}
            left={<TextInput.Icon icon="eye" />}
            rules={{
              required: "Contraseña es obligatorio.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener minimo 6 caracteres.",
              },
            }}
          />
          <CustomInput
            name="passwordRepeat"
            control={control}
            label="Repetir Contraseña"
            secureTextEntry={true}
            left={<TextInput.Icon icon="eye" />}
            rules={{
              validate: (value) =>
                value == pwd || "Las contraseñas no coinciden.",
            }}
          />
        </View>
      </ScrollView>

      <CustomButton
        text="Registrar"
        buttonColor={COLORS.green}
        textColor={COLORS.white}
        mode="elevated"
        onPress={handleSubmit(onRegisterPressed)}
      />
    </View>
  );
};

export default Register;
