import { useEffect } from "react";
import * as Permissions from "expo-permissions"; 
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationListener) => {
	useEffect(() => {
		registerForPushNotifications();
		if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
	}, []);

	const registerForPushNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
			if (!permission.granted) return;
			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokensApi.register(token);
			console.log(token);
		} catch (error) {
			console.log("Error getting a push token", error);
		}
	};
}



export default useNotifications;