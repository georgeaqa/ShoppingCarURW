import { COLORS, DIMENSIONS } from "../../../../constants";
import { CustomButton, CustomText } from "../../../../components";
import { Image, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { add_character, in_cart } from "../../../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

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
        className="bg-[#2cec2c] "
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
    <View className="flex-1 px-[2%] bg-white justify-between">
      <View className="flex-row">
        <View
          className="border-2 border-[#FF0000] my-2 rounded-2xl"
          style={{ width: DIMENSIONS.width / 3, height: DIMENSIONS.height / 5 }}
        >
          <Image
            className="w-full h-full"
            source={character.imageSource}
            resizeMode="contain"
          />
        </View>

        <View className="justify-center mx-2">
          <CustomText text={"ID: " + character.idCharacter} />
          <CustomText text={"Precio: $" + character.price} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CustomText newStyle={{textAlign:"justify"}} text={character.descriptionCharacter} />
      </ScrollView>

      {buttonAdd}
    </View>
  );
};

export default CharacterDetailScreen;
