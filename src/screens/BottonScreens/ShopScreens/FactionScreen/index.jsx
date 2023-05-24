import { FlatList, View } from "react-native";

import CustomeFactionsItems from "../../../../components/CustomFactionItems";
import Factions from "../../../../data/Factions";
import { React } from "react";

const FactionScreen = ({ navigation }) => {
  const renderFactionItems = ({ item }) => {
    return (
      <View>
        <CustomeFactionsItems item={item} navigation={navigation} />
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
