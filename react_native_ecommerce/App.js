
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductListScreen';
import BottomTabs from './src/screens/BottomTabs';
import ProductDetail from './src/screens/ProductDetail';
import { LoginContext } from './src/contexts/UserLoginContext';
import { FavContext } from './src/contexts/RefetchFavContext';
import { useState } from 'react';
import { CartContext } from './src/contexts/UserCartContext';

const Stack = createNativeStackNavigator();

export default function App(){

  const [userLogin, setUserLogin] = useState(true);
  const [refechFav, setRefechFav] = useState("");
  const [userCart, setUserCart] = useState(0);

  return (
    <LoginContext.Provider value={ { userLogin, setUserLogin } }>
      <CartContext.Provider value = { { userCart, setUserCart } }>
        <FavContext.Provider value = { { refechFav, setRefechFav } }>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name = "BottomTabs" 
                component = { BottomTabs }
                options= { { headerShown: false, } }
              /> 
              <Stack.Screen name = "ProductList" component={ProductList} />
              
              <Stack.Screen name = "product_detail"  component={ ProductDetail } /> 
            </Stack.Navigator>  
          </NavigationContainer>
        </FavContext.Provider>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}
