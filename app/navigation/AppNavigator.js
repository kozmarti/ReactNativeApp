import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import NewListingButton from "./NewListingButton";
import routes from "./routes";
// import { Notifications } from "expo-notifications";
// import * as Permissions from "expo-permissions";

const Tab = createBottomTabNavigator();
// screenoption error here
const AppNavigator = () => {
	// useEffect(() =>{
	// 	registerForPushNotifications();
	// }, []);

	// const registerForPushNotifications = async () => {
	// 	try{
	// 		const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
	// 		if (!permission.granted) return;
	// 		const token = await Notifications.getExpoPushTokenAsync();
	// 		console.log(token);
	// 	} catch (error) {
	// 		console.log("Error getting a push token", error);
	// 	}
	// }
		

	return (
	<Tab.Navigator screenOptions={{ headerShown: false }}>
		<Tab.Screen name="Feed" component={FeedNavigator} options={{tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="home" color={color} size={size} />}}/>
		<Tab.Screen name="ListingEdit" component={ListingEditScreen} options={({navigation}) => ({tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />, tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="plus-circle" color={color} size={size} />}) }/>
		<Tab.Screen name="MyAccount" component={AccountNavigator} options={{tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" color={color} size={size} />}} />
	</Tab.Navigator>
)
	};

export default AppNavigator;