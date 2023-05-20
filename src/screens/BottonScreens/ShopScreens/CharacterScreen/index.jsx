import { FlatList, Image, Text, View } from "react-native";

import CHARACTERS from "../../../../data/Characters";
import React from "react";
import styles from "./styles";

const CharacterScreen = ({ route }) => {
  const characters = CHARACTERS.filter(
    (characters) => characters.idClan === route.params.idClan,
  );

  const renderCharacterItem = ({ item }) => (
    <View style={styles.characterItem}>
      <Text style={styles.characterName}>{item.nameCharacter} </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image}source={item.imageSource} resizeMode="contain"/>
      </View>
      
    </View>
  );

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        keyExtractor={(item) => item.idCharacter}
      />
    </View>
  );
};

export default CharacterScreen;
