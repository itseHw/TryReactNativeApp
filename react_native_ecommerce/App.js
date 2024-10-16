import {SafeAreaView} from 'react-native';
import WelcomeView from './src/components/WelcomeComponent';
import HomeCarouselComponent from './src/components/HomeCarouselComponent';



export default function App(){
  return (
    <SafeAreaView>
      <WelcomeView />
      <HomeCarouselComponent />
    </SafeAreaView>
  );
}
