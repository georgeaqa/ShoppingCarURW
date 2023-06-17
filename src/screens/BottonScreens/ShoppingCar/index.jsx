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

const ShoppingCar = () => {
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
    dispatch(confirm_CART(localId,characters, total));
  };
  return (
    <View className="flex-1 px-[1%] bg-white justify-between">
      <View className="flex-1">
        <FlatList
          data={characters}
          keyExtractor={(item) => item.idCharacter}
          renderItem={renderCartcharacter}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View className="items-center">
        <CustomButton
          text={`Confirmar Total: ${total}`}
          className="bg-[#5cb85c] "
          newStyleText={{ color: COLORS.white }}
          onPress={handleConfirmCart}
        />
      </View>
    </View>
  );
};

export default ShoppingCar;
