import { StyleSheet } from 'react-native';
import {theme} from "../constants/theme";

const styles = StyleSheet.create({
    searchWrapper:{
        flex: 1,
        backgroundColor: theme.colors.yellow,
        borderRadius: theme.sizes.small,
        marginRight: theme.sizes.small,
    },
    welcomeText:(color, top) => ( //reuseable object
        {
            fontSize: theme.sizes.large,
            color: color,
            marginTop: top,
            marginHorizontal: theme.sizes.small
        }
    ),
    searchButton:{
        borderWidth: 2,
        borderRadius: theme.sizes.small,
        borderColor: theme.colors.black,
        padding: 5,
        justifyContent: "center",
        backgroundColor: theme.colors.white
    },
    searchContainer:{
        flexDirection:"row",
        justifyContent: "center",
        marginHorizontal: theme.sizes.small,
        backgroundColor: theme.colors.yellow,
        marginVertical: theme.sizes.medium,
        borderRadius: theme.sizes.medium
    },
    searchInput:{
        width:"100%",
        // height: "100%",  
        paddingHorizontal: theme.sizes.small 
    }

});

export default styles;