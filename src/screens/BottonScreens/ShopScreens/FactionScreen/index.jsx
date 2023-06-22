import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CustomFactionItems } from "../../../../components";
import { ROUTES } from "../../../../constants";
import { React } from "react";
import { selectedFaction } from "../../../../store/actions/faction.action";

const FactionScreen = ({ navigation }) => {
  const factions = useSelector((state) => state.factions.factions);
  const dispatch = useDispatch();

  const handleSelectedFaction = (item) => {
    dispatch(selectedFaction(item.idFactions));
    navigation.navigate(ROUTES.CHARACTER, {
      nameFactions: item.nameFactions,
      color: item.colorfaction,
    });
  };
  const renderFactionItems = ({ item }) => {
    return (
      <View>
        <CustomFactionItems item={item} onSelected={handleSelectedFaction} />
      </View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={factions}
        renderItem={renderFactionItems}
        keyExtractor={(item) => item.idFactions}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FactionScreen;
