import {View, Text,StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {theme} from "../constants/theme";
function  WelcomeView() {
    return (
        <View> 
            <View>
                <Text style={styles.welcomeText(theme.colors.black, 70)}>Find The Most </Text>


                 <Text style={styles.welcomeText(theme.colors.green, 0)}>Luxurious Furniture </Text>
            </View>
            <View style={styles.searchContainer}>

                <View style={styles.searchWrapper}>
                    <TextInput 
                        placeholder = "What are you looking for"
                        style = {styles.searchInput}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                   console.log("Clicked");
                }}>
                    <Text style={styles.searchButton} >
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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

export default WelcomeView;

