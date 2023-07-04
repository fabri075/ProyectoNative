import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary,
    maxHeight: "90%",
    paddingBottom: 15,
  },

  user: {
    color: colors.red,
  },

  welcome: {
    fontSize: 30,
  },

  logout: {
    marginBottom: 10,
  },

  image: {
    width: 500,
    height: 500,
  },
});

export default styles;
