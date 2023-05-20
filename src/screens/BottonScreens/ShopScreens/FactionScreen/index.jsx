import { FlatList, View } from "react-native";

import CustomeFactionsItems from "../../../../components/CustomFactionItems";
import Factions from "../../../../data/Factions";
import { ROUTES } from "../../../../constants";
import { React } from "react";
import styles from "./styles";

const FactionScreen = ({ navigation }) => {

  const renderFactionItems = ({ item }) => {
    return (
      <View>
        <CustomeFactionsItems item={item}/>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
