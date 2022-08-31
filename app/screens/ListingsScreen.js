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
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
	const getListingsApi = useApi(listingsApi.getListings);
	useEffect(() => {
		getListingsApi.request();
	}, []);
	
	
	return (
<Screen style={styles.screen}>
		{getListingsApi.error && 
		<View style={styles.errorContainer}>
		<AppText style={styles.errorMessage}>Couldn't retrieve the listings.</AppText>
		<AppButton title="Retry" onPress={loadListings} color={"secondary"}/>
		</View>
		}
		<ActivityIndicator visible={getListingsApi.loading}/>
		<FlatList
	data={getListingsApi.data}
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