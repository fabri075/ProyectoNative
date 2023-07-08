import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  bgImage:{
    flex: 1,
    justifyContent: "center"
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
    color: colors.black
  },
  input: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default styles;
