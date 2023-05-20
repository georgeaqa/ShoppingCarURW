import { FlatList, Image, View } from "react-native";

import Clans from "../../data/Clans";
import CustomClanItem from "./../CustomClanItems";
import React from "react";
import styles from "./styles";

const CustomeFactionsItems = ({ item }) => {
  const Clan = Clans.filter((Clan) => Clan.idFactions === item.idFactions);

  const handleSelectedClan = () => {
    console.log("HOLA");
  };

  const renderClanItem = ({ item }) => (
    <View>
      <CustomClanItem item={item} onSelected={handleSelectedClan} />
    </View>
  );

  return (
    <View style={styles.FactionsItems}>
      <View style={{backgroundColor:item.colorfaction}}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={Clan}
            renderItem={renderClanItem}
            keyExtractor={(clan) => clan.idClan}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomeFactionsItems;
