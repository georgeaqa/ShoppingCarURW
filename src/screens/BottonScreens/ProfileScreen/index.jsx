import { Image, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userId = useSelector((state) => state.auth.userId);
  const email = useSelector((state) => state.auth.email);
  const imageUri = useSelector((state) => state.auth.imageUri);
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-[300px] h-[300px] border m-2">
        <Image
          className="w-full h-full"
          source={{ uri: imageUri }}
          resizeMode="contain"
        />
      </View>
      <Text className="m-2 text-base">User ID: {userId}</Text>
      <Text className="m-2 text-base">Email: {email}</Text>
    </View>
  );
};

export default Profile;
