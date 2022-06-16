import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Alert, TouchableHighlight, ImageBackground, SafeAreaView, Button, Platform, StatusBar, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
export default function App() {
 
  return (
<MessagesScreen/>

  );
}

