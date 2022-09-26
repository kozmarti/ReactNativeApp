import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

const AuthNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}}/>
		<Stack.Screen name="Login" component={LoginScreen} options={{ headerBackTitleVisible: false, headerTintColor: colors.ormany,
          headerStyle: {
            backgroundColor: colors.primary,
          }, headerTitleStyle: {display: "none"}}}/>
		<Stack.Screen name="Register" component={RegisterScreen} options={{ headerBackTitleVisible: false, headerTintColor: colors.ormany,
          headerStyle: {
            backgroundColor: colors.secondary,
          }, headerTitleStyle: {display: "none"}}}/>
	</Stack.Navigator>
);

export default AuthNavigator;