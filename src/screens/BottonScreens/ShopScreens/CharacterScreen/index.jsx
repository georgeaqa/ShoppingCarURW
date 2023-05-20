import { FlatList, Image, Text, View } from "react-native";

import CHARACTERS from "../../../../data/Characters";
import CustomCharacterItems from "../../../../components/CustomCharacterItems";
import React from "react";
import styles from "./styles";

const CharacterScreen = ({ route }) => {
  const characters = CHARACTERS.filter(
    (characters) => characters.idClan === route.params.idClan
  );

  const handleSelectedCharacter = (Character) => {
  console.log(Character.idCharacter)
  };
  const renderCharacterItem = ({ item }) => (
    <View style={styles.characterItem}>
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
