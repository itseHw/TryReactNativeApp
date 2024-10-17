import {Text, Image, View, FlatList, Dimensions} from "react-native";
import { theme } from "../constants/theme";

const { width} = Dimensions.get("window");

const images = [
    {
        id: "1A",
        path: require("../../assets/images/chair01.png"),
    },
    {
        id: "1B",
        path: require("../../assets/images/cupboard01.png"),
    },
    {
        id: "1C",
        path: require("../../assets/images/light01.png"),
    },
];


// const data = [
//     {id:"1", title:"Item 1"},
//     {id:"2", title:"Item 2"},
//     {id:"3", title:"Item 3"},
//     {id:"4", title:"Item 4"},
//     {id:"5", title:"Item 5"},
// ]

const HomeCarouselComponent = () => {
    return (
        <View>
            <View style={{ 
                height: 250,
                width: 350,
                marginHorizontal: theme.sizes.medium,
                borderRadius: theme.sizes.medium,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* <Image style={{ resizeMode:"center", width:"90%", height:"100%"}}
                    source={require("../../assets/images/chair01.png")}
                /> */}
                <FlatList  /* FlatList handle scrolling and rendering performance for lists that can potentially contain a large number of items*/
                    data = {images}
                    renderItem={({item}) => (
                        <Image 
                            style={{ resizeMode: "center", width: width, height: "100%"}}
                            source = {item.path}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal 
                    pagingEnabled // providing a more structured and controlled scrolling experience.
                    showsHorizontalScrollIndicator ={false}
                    snapToAlignment= "center" // scroll picture, the next image will go to center
                />
                
            </View>
        </View>
    );
}

export default HomeCarouselComponent;