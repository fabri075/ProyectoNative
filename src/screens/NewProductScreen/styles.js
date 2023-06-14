import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
    color: colors.white
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default styles;
