import { FlatList, Image, Text, View } from "react-native";

import Clans from "../../data/Clans";
import CustomClanItem from "./../CustomClanItems";
import { ROUTES } from "../../constants";
import React from "react";
import styles from "./styles";

const CustomeFactionsItems = ({ item, navigation }) => {
  const Clan = Clans.filter((Clan) => Clan.idFactions === item.idFactions);

  const handleSelectedClan = (clan) => {
    navigation.navigate(ROUTES.CHARACTER, {
      idClan: clan.idClan,
      nameClan: clan.nameClan,
      color: item.colorfaction,
    });
  };

  const renderClanItem = ({ item }) => (
    <View>
      <CustomClanItem item={item} onSelected={handleSelectedClan} />
    </View>
  );

  return (
    <View style={styles.FactionsItems}>
      <View style={{ backgroundColor: item.colorfaction}}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
        <View>
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
