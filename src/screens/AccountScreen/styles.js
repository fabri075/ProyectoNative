import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "90%",
    paddingBottom: 75,
  },
  bgImage:{
    flex: 1,
    justifyContent: "center"
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
