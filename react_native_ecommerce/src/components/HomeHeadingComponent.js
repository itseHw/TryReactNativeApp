import { View, Text,TouchableOpacity} from "react-native";
import styles from "../styles/headings.style";


const HomeHeadingComponent = () => {
    return (
        <View style = {styles.container}>
                    <View style = {styles.header}>
            <Text style = {styles.headerTitle}>
                New Rivals
            </Text> 
            <TouchableOpacity >
                <Text style = {styles.clickMe} >
                    Click Me
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}


export default HomeHeadingComponent;