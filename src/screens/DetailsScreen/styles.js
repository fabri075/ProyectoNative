import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  bgImage:{
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  boxImage: {
    backgroundColor: colors.white,
    height: 250,
    width: "100%",
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 10,
  },
  card: {
    width: "90%",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    padding: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 20,
  },
  date: {
    marginTop: 15,
    textAlign: "right",
    fontStyle: "italic",
  },
});

export default styles;
