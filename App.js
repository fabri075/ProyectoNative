import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import MenuNavigator from "./src/navigation/MenuNavigator";

export default function App() {
  const [loaded] = useFonts({
    "InstrumentSerif-Regular": require("./src/assets/fonts/InstrumentSerif-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <MenuNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
