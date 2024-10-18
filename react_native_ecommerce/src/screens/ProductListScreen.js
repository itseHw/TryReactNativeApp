import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const localProductList = [
  {
      id: "1A",
      path: require("../../assets/images/chair01.png"),
  },
  {
      id: "1B",
      path: require("../../assets/images/light01.png"),
  },
  {
      id: "1C",
      path: require("../../assets/images/monitor01.png"),
  },
  {
    id: "1D",
    path: require("../../assets/images/table01.png"),
},
];

export default function ProductList() {

  const renderItem = ( {item} ) => {
    return (
      <View style ={ styles.imageContainer }>
        <Image style = { styles.image } 
          source={ item.path }
          resizeMode="contain"  //Ensures the entire image is visible
        />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data ={localProductList}
        renderItem={renderItem}
        keyExtractor={ (item) => item.id }
        numColumns={2}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex:1,
    alignItems: "center",
    height: 100,
    // width: 400,
    overflow: 'hidden',
    margin:5,
    aspectRatio: 1, //Makes the container a square
  },
  image:{
    width: "100%",
    height: "100%",
  }
});