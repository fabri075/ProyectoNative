import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  logoView:{
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  titleLogo:{
    fontFamily:'Fasthand-Regular',
    fontSize: 35,
    color: colors.green
  },
  bgImage:{
    flex: 1,
    justifyContent: "center"
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
