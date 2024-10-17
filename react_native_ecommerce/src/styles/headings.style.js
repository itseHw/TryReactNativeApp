import { theme } from "../constants/theme";
import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    headerTitle:{
        fontSize: theme.sizes.xLarge
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    clickMe:{
        width: theme.sizes.size100,
        height: theme.sizes.xLarge +15,
        fontSize: theme.sizes.xLarge,
        fontWeight: "bold",
        borderWidth: 2,
        borderColor: theme.colors.red,
        borderRadius: theme.sizes.medium,
        // padding: theme.sizes.large,
    },
    container:{
        marginHorizontal: theme.sizes.small,
        marginTop: theme.sizes.medium
    }
})

export default styles;