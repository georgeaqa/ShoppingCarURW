import * as ImagePicker from "expo-image-picker";

import { CustomButton, CustomInput } from "../../../../components";
import { Image, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../../../constants";
import { editUserData } from "../../../../store/actions/profile.action";
import { useForm } from "react-hook-form";

const EditProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
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
  };
  return (
    <View className="flex-1 justify-between items-center p-[2%] bg-white">
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
          <CustomInput name="name" control={control} placeholder="Nombre" />
          <CustomInput
            name="lastName"
            control={control}
            placeholder="Apellido"
          />
        </View>
      </ScrollView>

      <CustomButton
        text="ACEPTAR CAMBIOS"
        className="border border-[#2cec2c]"
        newStyleText={{ color: COLORS.green, fontSize: 10, height: 25 }}
        onPress={handleSubmit(onSaveEditPressed)}
      />
    </View>
  );
};

export default EditProfileScreen;
