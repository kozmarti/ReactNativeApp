import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, Alert, TouchableHighlight, ImageBackground, SafeAreaView, Button, Platform, StatusBar, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import { TextInput } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
 return <ListingEditScreen/>
}
