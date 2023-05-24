import { Image, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CustomeFactionsItems = ({ item, onSelected }) => {
  return (
    <View className="flex-1">
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={styles.imageContainer}>
          <Image
            className="w-full h-full"
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomeFactionsItems;
