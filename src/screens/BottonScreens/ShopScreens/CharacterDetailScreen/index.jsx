import { Image, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../../../constants";
import { CustomButton } from "../../../../components";
import { DIMENSIONS } from "../../../../constants";
import React from "react";
import { add_character } from "../../../../store/actions/cart.action";

const CharacterDetailScreen = () => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);

  const handleAddCharacter = () => {
    dispatch(add_character(character));
  };

  return (
    <View className="flex-1 px-[5%] bg-white justify-between">
      <View className="flex-row">
        <View
          className="border border-[#FFFF00] my-2"
          style={{ width: DIMENSIONS.width / 3, height: DIMENSIONS.height / 5 }}
        >
          <Image
            className="w-full h-full"
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
          onPress={handleAddCharacter}
        />
      </View>
    </View>
  );
};

export default CharacterDetailScreen;
