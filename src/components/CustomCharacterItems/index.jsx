import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CustomCharacterItems = ({ item, onSelected }) => {
  return (
    <View style={styles.characterItem}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <Text style={styles.characterName}>{item.nameCharacter}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCharacterItems;
