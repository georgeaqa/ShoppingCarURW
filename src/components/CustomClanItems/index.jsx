import { Image, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CustomeFactionsItems = ({ item, onSelected }) => {
  return (
    <View style={styles.ClanItem}>
      <TouchableOpacity
        onPress={() => onSelected(item)}
      >
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

export default CustomeFactionsItems;
