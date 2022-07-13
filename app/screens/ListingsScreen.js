import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';


function ListingsScreen({navigation}) {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		loadListings();
	}, []);
	const loadListings = async ()  => {
		setLoading(true);
		const response = await listingsApi.getListings();
		setLoading(false);

		if(!response.ok) return setError(true);

		setError(false);		
		setListings(response.data);
	};
	
	return (
<Screen style={styles.screen}>
		{error && 
		<View style={styles.errorContainer}>
		<AppText style={styles.errorMessage}>Couldn't retrieve the listings.</AppText>
		<AppButton title="Retry" onPress={loadListings} color={"secondary"}/>
		</View>
		}
		<ActivityIndicator visible={true}/>
	
</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.ormany
	},
	errorContainer: {
		alignContent: "center",
		alignItems: "center",
		height: "100%",
		justifyContent: "center"
	},
	errorMessage: {
		color: colors.secondary,
		margin: 20
	}
})
export default ListingsScreen;