
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductListScreen';
import BottomTabs from './src/screens/BottomTabs';
import ProductDetail from './src/screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
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
  );
}
