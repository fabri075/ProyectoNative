import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: colors.primary
    },
    input:{
        flexDirection: "row",
        alignItems: "center"
    },
    fail:{
        color: colors.red
    }
})

export default styles;