
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from './app/components/Screen';
import { Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from './app/config/colors';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
const Tweets = ({navigation}) => (
	<Screen>
		<Text>
			Tweets
		</Text>
		<Button
		title="View Tweet"
		onPress={() => navigation.navigate("TweetDetails", { id: "1" })}
		/>
	</Screen>
);

const TweetDetails = ({ route}) => (
	 <Screen>
<Text>TweetDetails {route.params.id}</Text>

	 </Screen>
);


const Link = () => {
const navigation = useNavigation();
return (
	<Button title="Click" onPress={()=> navigation.navigate("TweetDetails")}/> 
)
};

const Stack = createStackNavigator();
const StackNavigator=() => (
	<Stack.Navigator
	screenOptions={{
		headerStyle: { backgroundColor: 'dodgerblue'},
		headerTintColor: "white",
	}}
	>
			<Stack.Screen 
			name="Tweets" 
			component={Tweets} 
			
			/>
		<Stack.Screen 
		name="TweetDetails" 
		component={TweetDetails} 
		options={{
			headerStyle: { backgroundColor: 'tomato'},
			headerTintColor: "white",
			headerShown: false
			}}/>


  </Stack.Navigator>
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
	<Tab.Navigator
	screenOptions={{
		tabBarActiveTintColor: "white",
		tabBarInactiveTintColor: "black",
		tabBarActiveBackgroundColor: "tomato",
		tabBarInactiveBackgroundColor: "#eee",
		headerShown: false

	}}>
<Tab.Screen 
name="Feed" 
component={Tweets}
options = {{ 
	tabBarIcon: ({ size, color }) => (
<MaterialCommunityIcons name="home" size={size} color={color}/> 
	)
}}
/>
<Tab.Screen name="Account" component={Account}/>
	</Tab.Navigator>
)
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
		<AuthNavigator/>
    </NavigationContainer>
  );
}

