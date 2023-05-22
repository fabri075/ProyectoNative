import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    maxHeight: "90%",
    paddingBottom: 15,
  },

  welcome: {
    fontSize: 30,
  },
});

export default styles;
