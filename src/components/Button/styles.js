import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default styles;