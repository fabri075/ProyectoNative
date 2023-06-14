import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    preview: {
      width: "100%",
      height: 200,
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: colors.black,
      borderWidth: 1,
    },
    image: {
      width: "100%",
      height: " 100%",
    },
  });

export default styles;