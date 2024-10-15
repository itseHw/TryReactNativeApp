import {View, Text,StyleSheet, TouchableOpacity, TextInput} from 'react-native';

function  WelcomeView() {
    return (
        <View> 
            <View>
                <Text style={styles.welcomeText('black', 70)}>Find The Most </Text>


                 <Text style={styles.welcomeText('green', 0)}>Luxurious Furniture </Text>
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
                    <Text style={styles.searchBorder} >
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
        backgroundColor: "yellow"
    },
    welcomeText:(color, top) => ( //reuseable object
        {
            fontSize: 30,
            color: color,
            marginTop: top,
            marginHorizontal: 50
        }
    ),
    searchBorder:{
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "black",
        padding: 5
    },
    searchContainer:{
        flexDirection:"row",
        justifyContent: "center",
        marginHorizontal: 80
    },
    searchInput:{
        width:"100%",
        // height: "100%",    
    }

});

export default WelcomeView;

