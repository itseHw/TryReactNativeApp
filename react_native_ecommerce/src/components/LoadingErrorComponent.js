import React from 'react'
import { View, Text } from 'react-native';
import loadingStyles from '../styles/loading.style';

export default function LoadingErrorComponent({ isLoading, error }) {
    if(isLoading){
        return (
            <View style = { { justifyContent:"center", alignItems:"center", flex:1 } }>
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
        );
    }

    if(error){
        return(
            <View style = { { justifyContent:"center", alignContent:"center" } }>
                <Text>We have an error</Text>
            </View>
        )
    }

    return null;
}
