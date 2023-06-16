import MainNavigator from "./src/navigators";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import store from "./src/store";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "UrbanRivals": require("./src/assets/fonts/UrbanRivals.ttf"),
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
