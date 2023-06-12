import MainNavigator from "./src/navigators";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "DancingScript-VariableFont_wght": require("./src/assets/fonts/DancingScript-VariableFont_wght.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar/>
    </Provider>
  );
}
