import { Image, ScrollView, Text, View } from "react-native";

import { COLORS } from "../../../../constants";
import { CustomButton } from "../../../../components";
import React from "react";
import { useSelector } from "react-redux";

const CharacterDetailScreen = () => {
  const character = useSelector((state) => state.characters.selectedCharacter);

  return (
    <View className="flex-1 px-[5%] bg-white justify-between">
      <View className="flex-row">
        <View className="border border-[#FFFF00] my-2">
          <Image
            style={{ width: 150, height: 200 }}
            source={character.imageSource}
            resizeMode="contain"
          />
        </View>

        <View className="justify-center mx-2">
          <Text className="text-base">ID: {character.idCharacter}</Text>
          <Text className="text-base">Nombre: {character.nameCharacter}</Text>
          <Text className="text-base">Precio:{character.price}</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text className="text-justify text-base">
          {character.descriptionCharacter}
        </Text>
      </ScrollView>

      <View className="items-center">
        <CustomButton
          text="Agregar al carrito"
          className="bg-[#5cb85c] "
          newStyleText={{ color: COLORS.white }}
        />
      </View>
    </View>
  );
};

export default CharacterDetailScreen;
