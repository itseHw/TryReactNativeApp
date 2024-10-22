import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import ProductCardComponent from '../components/ProductCardComponent';
import loadingStyles from '../styles/loading.style';
import { Ionicons } from '@expo/vector-icons';

const localProductList = [
  {
      id: "1A",
      title: "Chair",
      price: "$50",
      path: require("../../assets/images/chair01.png"),
  },
  {
      id: "1B",
      title: "Strong light",
      price: "$120",
      path: require("../../assets/images/light01.png"),
  },
  {
      id: "1C",
      price: "$3000",
      title: "4K Monitor",
      path: require("../../assets/images/monitor01.png"),
  },
  {
    id: "1D",
    title: "Table",
    price: "$70",
    path: require("../../assets/images/table01.png"),
  },
];

export default function ProductList() {
  const [ loading, setLoading ] = useState(true); // true can change to number or other words, related to loading in this case

  useEffect(() =>{
    const timer = setTimeout( () =>
    {
      setLoading(false);
    }, 3000 );//3000 means 3 second
    return () => clearTimeout(timer);
  }, []);

  if(loading){
    return <View style = { loadingStyles.loadingView }>
      <Text style = { loadingStyles.showLoading } >Loading......</Text>
      <Ionicons name = "reload-circle" size = { 64 }/>
    </View>
  }

  const renderItem = ({ item }) => {
    return (
      <ProductCardComponent item = { item }/>
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

