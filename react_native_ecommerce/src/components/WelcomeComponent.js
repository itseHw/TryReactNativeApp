import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {theme} from "../constants/theme";
import styles from '../styles/welcome.style';
function  WelcomeComponent() {
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

export default WelcomeComponent;

