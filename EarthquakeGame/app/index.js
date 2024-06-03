import { SafeAreaView, AppRegistry, Text, StatusBar } from 'react-native';
//import Navigation from './scr/navigation';
import Navigation from '../components/navigation'
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import { Provider } from "react-redux";
import store from "../components/redux/Store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <GluestackUIProvider config={config}>
        <StatusBar translucent={true} backgroundColor="transparent" barStyle='dark-content' />
        <Provider store={store}>
          <Navigation />
        </Provider>
      </GluestackUIProvider>
    </SafeAreaView>

  );
}