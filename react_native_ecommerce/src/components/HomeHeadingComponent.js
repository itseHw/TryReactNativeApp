import { View, Text,TouchableOpacity} from "react-native";
import styles from "../styles/headings.style";
import { useNavigation } from "@react-navigation/native";


const HomeHeadingComponent = () => {
    const nav = useNavigation();
    return (
        <View style = {styles.container}>
                    <View style = {styles.header}>
            <Text style = {styles.headerTitle}>
                New Rivals
            </Text> 
            <TouchableOpacity onPress={ () => nav.navigate("ProductList") }>
                <Text style = {styles.clickMe} >
                    Click Me
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}


export default HomeHeadingComponent;