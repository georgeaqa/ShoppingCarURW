import * as ImagePicker from "expo-image-picker";

import { Alert, Image, Pressable, ScrollView, View } from "react-native";
import { CustomButton, CustomInput } from "../../../../components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editUserData } from "../../../../store/actions/auth.action";
import { useForm } from "react-hook-form";
import { useTheme } from "react-native-paper";

const EditProfileScreen = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: userData.name,
      lastName: userData.lastName,
    },
  });
  const [imageUri, setImageUri] = useState(userData.imageUri);
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
  const onSaveEditPressed = (data) => {
    Alert.alert("Mensaje", "¿Confirma aceptar los cambios?", [
      {
        text: "Si",
        onPress: () => {
          dispatch(
            editUserData(
              userData.id,
              userData.localId,
              data.name,
              data.lastName,
              userData.email,
              imageUri
            )
          );
          navigation.goBack();
        },
        style: "default",
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };
  return (
    <View
      className="flex-1 justify-between items-center p-1"
      style={{ backgroundColor: theme.colors.background }}
    >
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
            label="Nombres"
            control={control}
            placeholder="Nombre"
          />
          <CustomInput
            name="lastName"
            label="Apellidos"
            control={control}
            placeholder="Apellido"
          />
        </View>
      </ScrollView>

      <CustomButton
        text="ACEPTAR CAMBIOS"
        textColor={theme.colors.greenButton}
        mode="elevated"
        onPress={handleSubmit(onSaveEditPressed)}
      />
    </View>
  );
};

export default EditProfileScreen;
