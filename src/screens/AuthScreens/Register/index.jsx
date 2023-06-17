import * as ImagePicker from "expo-image-picker";

import { COLORS, EMAIL_REGEX } from "../../../constants";
import { CustomButton, CustomInput } from "../../../components";
import { Image, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";

import { signUp } from "../../../store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Register = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const [imageUri, setImageUri] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
    <View className="flex-1 justify-between items-center px-[5%] py-[2%] bg-white">
      <ScrollView className="w-full">
        <View className="w-full justify-between items-center">
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
          placeholder="Nombre"
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
          placeholder="Apellido"
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
          placeholder="Repetir Contraseña"
          secureTextEntry={true}
          rules={{
            validate: (value) =>
              value == pwd || "Las contraseñas no coinciden.",
          }}
        />
        </View>
        
        
      </ScrollView>

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
