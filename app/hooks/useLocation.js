import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
	const [location, setLocation] = useState();
	let getlocation = async () => {
		try {
			const { granted } = await Location.requestForegroundPermissionsAsync();
	  		if (!granted) return;
	  		let { coords: {latitude, longitude }} = await Location.getLastKnownPositionAsync();
	  		setLocation({ latitude, longitude });
		} catch (error) {
			console.log(error);
		}
	  
	};
	useEffect(() => {
	  getlocation();
	}, []);
	return location;

};

export default useLocation;

