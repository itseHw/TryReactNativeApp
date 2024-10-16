import {Text, Image, View, FlatList} from "react-native";
import { theme } from "../constants/theme";

const data = [
    {id:"1", title:"Item 1"},
    {id:"2", title:"Item 2"},
    {id:"3", title:"Item 3"},
    {id:"4", title:"Item 4"},
    {id:"5", title:"Item 5"},
]

const HomeCarouselComponent = () => {

    return (
        <View>
            <View style={{ height: 200, 
            marginHorizontal: theme.sizes.medium,
            borderRadius: theme.sizes.medium,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center"
            }}>
                <Image style={{ resizeMode:"center", width:"90%", height:"100%"}}
                    source={require("../../assets/images/chair01.png")}
                />
            </View>

            <View>
                <FlatList  /* FlatList handle scrolling and rendering performance for lists that can potentially contain a large number of items*/
                    data = {data}
                    renderItem={() => <Text> Hello, how are you? </Text>}

                />
            </View>
        </View>
    );
}

export default HomeCarouselComponent;