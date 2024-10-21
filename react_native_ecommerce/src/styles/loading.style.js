import { theme } from "../constants/theme";
import { StyleSheet} from "react-native";

const loadingStyles = StyleSheet.create({
    loadingView:{
        justifyContent:"center", 
        alignItems: "center",
        flex: 1,
    },
    showLoading:{
        fontSize: theme.sizes.xLarge,
        fontWeight: theme.fontWeight.bold,
        color: theme.colors.red,
    },

})

export default loadingStyles;