import { FlatList, View } from "react-native";

import CustomeFactionsItems from "../../../../components/CustomFactionItems";
import Factions from "../../../../data/Factions";
import { ROUTES } from "../../../../constants";
import { React } from "react";

const FactionScreen = ({ navigation }) => {
  const handleSelectedFaction = item => {
    navigation.navigate(ROUTES.CHARACTER, {
      idFactions: item.idFactions,
      nameFactions: item.nameFactions,
      color: item.colorfaction,
    });
  };
  const renderFactionItems = ({ item }) => {
    return (
      <View>
        <CustomeFactionsItems item={item} onSelected={handleSelectedFaction} />
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={Factions}
        renderItem={renderFactionItems}
        keyExtractor={(item) => item.idFactions}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FactionScreen;
