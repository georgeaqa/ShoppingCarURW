import { FlatList, Image, View } from "react-native";

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
    <View className="flex-1 m-[1%]">
      <View style={{ backgroundColor: item.colorfaction }}>
        <View
          className="w-full border rounded border-[#FFD700]"
          style={styles.heightContainer}
        >
          <Image
            className="w-full h-full"
            source={item.imageSource}
            resizeMode="contain"
          />
        </View>
        <FlatList
          data={Clan}
          renderItem={renderClanItem}
          keyExtractor={(clan) => clan.idClan}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CustomeFactionsItems;
