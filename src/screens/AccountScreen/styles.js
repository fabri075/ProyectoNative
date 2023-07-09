import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 75,
    alignItems: "center"
  },
  bgImage:{
    flex: 1,
    justifyContent: "center"
  },
  list:{
    flex: 1,
    borderStyle: "solid",
    borderColor: colors.black,
    borderWidth: 1,
    width: "100%",
  },
  user: {
    color: colors.red,
  },

  welcome: {
    fontSize: 30,
    color: colors.white
  },

  logout: {
    marginBottom: 10,
  },
});

export default styles;
