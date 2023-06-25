import { CustomButton, CustomCartItems } from "../../../components";
import { FlatList, View } from "react-native";
import {
  confirm_CART,
  decrease_character,
  increase_character,
  remove_character,
} from "../../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import { COLORS } from "../../../constants";
import React from "react";
import { useTheme } from "react-native-paper";

const ShoppingCar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.cart.characters);
  const total = useSelector((state) => state.cart.total);
  const localId = useSelector((state) => state.auth.localId);
  const handleDeleteItem = (idCharacter) => {
    dispatch(remove_character(idCharacter));
  };
  const handleIncreaseItem = (idCharacter) => {
    dispatch(increase_character(idCharacter));
  };
  const handleReduceItem = (idCharacter) => {
    dispatch(decrease_character(idCharacter));
  };
  const renderCartcharacter = ({ item }) => (
    <CustomCartItems
      item={item}
      onDelete={handleDeleteItem}
      onIncrease={handleIncreaseItem}
      onReduce={handleReduceItem}
    />
  );
  const handleConfirmCart = () => {
    dispatch(confirm_CART(localId, characters, total));
  };
  return (
    <View
      className="flex-1 justify-between"
      style={{ backgroundColor: theme.colors.background }}
    >
      <View className="flex-1">
        <FlatList
          data={characters}
          renderItem={renderCartcharacter}
          keyExtractor={(item) => item.idCharacter}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="items-center p-[1%]">
        <CustomButton
          text={`Confirmar Compra: ${total}`}
          onPress={handleConfirmCart}
          buttonColor={theme.colors.greenButton}
          textColor={COLORS.white}
          mode="elevated"
        />
      </View>
    </View>
  );
};

export default ShoppingCar;
