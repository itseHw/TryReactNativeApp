import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white,
        height: 270,
    },
    image:{
        marginVertical: 10,
        resizeMode: "contain", //contain: scaled to fit within container and keep aspect ratio
        width: "50%",
        height: "30%",
        borderRadius: theme.sizes.small,
        alignSelf: "center",
    },
    details:{
        backgroundColor: theme.colors.lightWhite,
        width: theme.sizes.width
    },
    titleRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    ratingRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rating:{
        flexDirection: "row",
        justifyContent: "flex-start",
        top: theme.sizes.xSmall,
        marginHorizontal: theme.sizes.large
    },
    title:{
        fontSize: theme.sizes.large
    },
    price:{
        fontSize: theme.sizes.large
    },
    textSpace:{
        marginHorizontal: theme.sizes.xSmall,
        color: theme.colors.grey
    },
    descriptionWrapper:{
        marginTop: theme.sizes.large*2,
        marginHorizontal: theme.sizes.large
    },
    descriptionTitle:{
        fontWeight: 'bold',
        fontSize: theme.sizes.large
    },
    descriptionText:{
        fontSize: theme.sizes.medium,
        textAlign: "justify",
        marginTop: theme.sizes.xSmall
    },
    location:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.colors.lavender,
        padding: 5,
        borderRadius: theme.sizes.large
    },
    locationWrapper:{
        flexDirection: "row"
    },
    locationView:{
        marginHorizontal: theme.sizes.medium
    },
    locationShowView:{
        marginLeft: 5
    },
    deliveryInfo:{
        flexDirection: "row",
        marginRight: 5
    },
    freeDelivery:{
        marginLeft: 10
    }

})

export default styles;