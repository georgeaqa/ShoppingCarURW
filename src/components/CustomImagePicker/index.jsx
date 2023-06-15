import * as ImagePicker from "expo-image-picker";

import { Image, Pressable } from "react-native";
import React, { useState } from "react";

const CustomImagePicker = () => {
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

  return (
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
  );
};

export default CustomImagePicker;
