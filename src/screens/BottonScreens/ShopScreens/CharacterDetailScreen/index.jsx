import { COLORS, ROUTES } from "../../../../constants";
import { Image, ScrollView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CustomButton } from "../../../../components";
import { DIMENSIONS } from "../../../../constants";
import { add_character } from "../../../../store/actions/cart.action";
import { in_cart } from "../../../../store/actions/cart.action";

const CharacterDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);
  const inCart = useSelector((state) => state.cart.inCart);
  const handleAddCharacter = () => {
    dispatch(add_character(character));
    dispatch(in_cart(character.idCharacter));
    navigation.goBack();
  };
  useEffect(() => {
    dispatch(in_cart(character.idCharacter));
  }, []);

  let buttonAdd = (
    <View className="items-center">
      <CustomButton
        text="Agregar al carrito"
        className="bg-[#5cb85c] "
        newStyleText={{ color: COLORS.white }}
        onPress={handleAddCharacter}
      />
    </View>
  );

  if (inCart) {
    buttonAdd = (
      <View className="items-center">
        <CustomButton
          text="Ya esta agregado en el carrito"
          className="bg-[#ccc] "
          newStyleText={{ color: COLORS.white }}
        />
      </View>
    );
  }

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
          <Text
            className="text-base"
            style={{ fontFamily: "UrbanRivals" }}
          >
            ID: {character.idCharacter}
          </Text>
          <Text
            className="text-base"
            style={{ fontFamily: "UrbanRivals" }}
          >
            Precio: {character.price}
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text
          className="text-justify text-base"
          style={{ fontFamily: "UrbanRivals" }}
        >
          {character.descriptionCharacter}
        </Text>
      </ScrollView>

      {buttonAdd}
    </View>
  );
};

export default CharacterDetailScreen;
