import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.primary,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  fail: {
    color: colors.red,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default styles;
