import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import {
  filteredCharacter,
  selectedCharacter,
} from "../../../../store/actions/character.action";
import { useDispatch, useSelector } from "react-redux";

import { CustomCharacterItems } from "../../../../components";
import { ROUTES } from "../../../../constants";
import { useTheme } from "react-native-paper";

const CharacterScreen = ({ navigation, route }) => {
  const theme = useTheme();
  const filteredCharacters = useSelector(
    (state) => state.characters.filteredCharacter
  );
  const selectedFaction = useSelector(
    (state) => state.factions.selectedFaction
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredCharacter(selectedFaction.idFactions));
  }, []);

  const handleSelectedCharacter = (Character) => {
    dispatch(selectedCharacter(Character.idCharacter));
    navigation.navigate(ROUTES.CHARACTER_DETAIL, {
      nameCharacter: Character.nameCharacter,
      color: route.params.color,
    });
  };
  const renderCharacterItem = ({ item }) => (
    <CustomCharacterItems item={item} onSelected={handleSelectedCharacter} />
  );

  return (
    <View
      className="flex-1"
      style={{ backgroundColor: theme.colors.background }}
    >
      <FlatList
        data={filteredCharacters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.idCharacter}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CharacterScreen;
