import { COLORS, DIMENSIONS } from "../../../../constants";
import { CustomButton, CustomModal, CustomText } from "../../../../components";
import { Image, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { add_character, in_cart } from "../../../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";

const CharacterDetailScreen = ({ navigation }) => {
  const [isModalvisible, setIsModalVisible] = useState(false);
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
  const showModal = () => {
    setIsModalVisible(true);
  };
  let buttonAdd = (
    <View className="items-center">
      <CustomButton
        text="Agregar al carrito"
        textColor={theme.colors.greenButton}
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
  const onDismiss = () => {
    setIsModalVisible(false);
  };
  return (
    <View
      className="flex-1 px-1 justify-between"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-row">
        <Card
          className="my-2 rounded-2xl"
          style={{ width: DIMENSIONS.width / 3, height: DIMENSIONS.height / 5 }}
        >
          <TouchableOpacity onPress={() => showModal()}>
            <Image
              className="w-full h-full"
              source={character.imageSource}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <CustomModal
            visible={isModalvisible}
            onDismiss={onDismiss}
            character={character}
          />
        </Card>

        <View className="justify-center mx-2">
          <CustomText
            variant="labelLarge"
            text={"ID: " + character.idCharacter}
            newStyle={{ color: theme.colors.text }}
          />
          <CustomText
            variant="labelLarge"
            text={"Precio: $" + character.price}
            newStyle={{ color: theme.colors.text }}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CustomText
          variant="bodyLarge"
          newStyle={{ textAlign: "justify", color: theme.colors.text }}
          text={character.descriptionCharacter}
        />
      </ScrollView>

      {buttonAdd}
    </View>
  );
};

export default CharacterDetailScreen;
