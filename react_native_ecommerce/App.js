import {Text, View} from 'react-native';

export default function App(){
  return (
    <View style={{ flex: 1, 
    // flexDirection: 'row', // column
    alignItems: 'center', 
    justifyContent : 'flex-start', //flex-start mean put on begining, flex-end mean put on the end
    justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, }}>Hello React Native</Text>
    </View>

  );
}