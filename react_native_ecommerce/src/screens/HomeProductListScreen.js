import { View, Text, FlatList } from 'react-native'
import React from 'react'
import fetchHomeProduct from '../hooks/fetchHomeProduct';
import loadingStyles from '../styles/loading.style';
import ProductCardComponent from '../components/ProductCardComponent';

export default function HomeProductListScreen() {
    const {isLoading, data, error} = fetchHomeProduct();
  return (
    <View>
        {
            isLoading?(
                <Text style = { loadingStyles.showLoading } >Loading......</Text>
            ):error?(
                <Text>We have error</Text>
            ):(
                <FlatList 
                    data={ data }
                    keyExtractor={ (item) => item.id }
                    renderItem={ ({ item }) => (<ProductCardComponent item = { item }/> ) }
                    numColumns={2}
                />
            )
        }
    </View>
  )
}