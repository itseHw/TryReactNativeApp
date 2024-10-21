import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductListScreen';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "HomeScreen" 
          component={HomeScreen}
          options={ { headerShown: false, } }
        /> 
        <Stack.Screen name = "ProductList" component={ProductList} />   
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
