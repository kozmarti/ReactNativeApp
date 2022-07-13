import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';



function ListingsScreen({navigation}) {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(false);
	useEffect(() => {
		loadListings();
	}, []);
	const loadListings = async ()  => {
		const response = await listingsApi.getListings();
		if(!response.ok) return setError(true);
		setError(false);		
		setListings(response.data);
	}
	
	return (
<Screen style={styles.screen}>
		{error && 
		<View style={styles.errorContainer}>
		<AppText style={styles.errorMessage}>Couldn't retrieve the listings.</AppText>
		<AppButton title="Retry" onPress={loadListings} color={"secondary"}/>
		</View>
		}
	<FlatList
	data={listings}
	keyExtractor={listing => listing.id.toString()}
	renderItem={({ item }) => 
	<Card 
	title={item.title}
	subTitle={"$" +item.price}
	imageUrl={item.images[0].url}
	onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
	/>
	} />
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