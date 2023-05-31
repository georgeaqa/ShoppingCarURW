import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import {
  filteredCharacter,
  selectedCharacter,
} from "../../../../store/actions/character.action";
import { useDispatch, useSelector } from "react-redux";

import { CustomCharacterItems } from "../../../../components";

const CharacterScreen = ({ route }) => {
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
    console.log(Character.idCharacter);
  };
  const renderCharacterItem = ({ item }) => (
    <View className="flex-1">
      <CustomCharacterItems item={item} onSelected={handleSelectedCharacter} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={filteredCharacters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.idCharacter}
        numColumns={2}
      />
    </View>
  );
};

export default CharacterScreen;
