import { COLORS, DIMENSIONS } from "../../../../constants";
import { CustomButton, CustomText } from "../../../../components";
import { Image, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { add_character, in_cart } from "../../../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-native-paper";
import { useTheme } from "react-native-paper";

const CharacterDetailScreen = ({ navigation }) => {
  const theme = useTheme();
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
        buttonColor={COLORS.green}
        textColor={COLORS.white}
        mode="elevated"
        onPress={handleAddCharacter}
      />
    </View>
  );

  if (inCart) {
    buttonAdd = (
      <View className="items-center">
        <CustomButton text="Ya esta agregado en el carrito" disabled />
      </View>
    );
  }

  return (
    <View
      className="flex-1 px-[2%] justify-between"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-row">
        <Card
          className="my-2 rounded-2xl"
          style={{ width: DIMENSIONS.width / 3, height: DIMENSIONS.height / 5 }}
        >
          <Image
            className="w-full h-full"
            source={character.imageSource}
            resizeMode="contain"
          />
        </Card>

        <View className="justify-center mx-2">
          <CustomText
            variant="labelLarge"
            text={"ID: " + character.idCharacter}
          />
          <CustomText
            variant="labelLarge"
            text={"Precio: $" + character.price}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CustomText
          variant="bodyLarge"
          newStyle={{ textAlign: "justify" }}
          text={character.descriptionCharacter}
        />
      </ScrollView>

      {buttonAdd}
    </View>
  );
};

export default CharacterDetailScreen;
