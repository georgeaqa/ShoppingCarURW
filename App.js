import MainNavigator from "./src/navigators";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { init } from "./src/constants/database";
import store from "./src/store";
import { useFonts } from "expo-font";
init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database initialization failed");
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    UrbanRivals: require("./src/assets/fonts/UrbanRivals.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigator />
        <StatusBar/>
      </PaperProvider>
    </Provider>
  );
}
