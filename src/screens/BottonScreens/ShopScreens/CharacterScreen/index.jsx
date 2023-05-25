import { FlatList, View } from "react-native";

import CHARACTERS from "../../../../data/Characters";
import CustomCharacterItems from "../../../../components/CustomCharacterItems";
import React from "react";

const CharacterScreen = ({ route }) => {

  const characters = CHARACTERS.filter(
    (characters) => characters.idFactions === route.params.idFactions
  );

  const handleSelectedCharacter = (Character) => {
  console.log(Character.idCharacter)
  };
  const renderCharacterItem = ({ item }) => (
    <View className="flex-1">
     <CustomCharacterItems item={item} onSelected={handleSelectedCharacter}/>
    </View>
  );

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.idCharacter}
        numColumns={2}
      />
    </View>
  );
};

export default CharacterScreen;
