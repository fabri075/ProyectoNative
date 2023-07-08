import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import MenuNavigator from "./src/navigation/MenuNavigator";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./db";

init()
.then(() => console.log("Inicio"))
.catch(err => {
  console.log(err.message);
})

export default function App() {
//  const [loaded] = useFonts({
//    "InstrumentSerif-Regular": require("./src/assets/fonts/InstrumentSerif-Regular.ttf"),
//  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MenuNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
