import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import { Image } from 'react-native-expo-image-cache';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItemSeparator from '../components/ListItemSeparator';
import { SliderBox } from "react-native-image-slider-box";

function ListingDetailsScreen({route, navigation}) {
	navigation.setOptions({ headerBackTitleVisible: false, headerTintColor: colors.primary,
		headerStyle: {
		  backgroundColor: colors.ormany,
		}, headerTitleStyle: {display: "none"}})
	const listing = route.params;
	console.log(listing.images);
	let imageUrls = [];
	for (let i = 0; i < listing.images.length; i++) {
		imageUrls.push(listing.images[i].url)
	  }
	  /* <Image style={styles.image} tint="light" preview={{ uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url}></Image> */
	return (
		<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
		<View style={styles.card}>
		<SliderBox images={ imageUrls }
		dotColor={colors.secondary}
		inactiveDotColor={colors.ormany} />
			
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.subTitle}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItemSeparator/>
				<ListItem
				image={require('../assets/student.jpg')}
				title="Maria"
				subTitle="5 listings"
				/>
				
				</View>
			</View>
			<View style={styles.message}>
			<ContactSellerForm listing={listing} />
			</View>
		</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginBottom: 30,
		overflow: "hidden",
	},
	image: {
		height: 200,
		width: "100%",
	},
	detailsContainer: {
		
	},
	title: {
		marginBottom: 7,
		paddingLeft: 20,
		paddingTop: 10
	},
	subTitle: {
		color: colors.danger,
		paddingLeft: 20
	},
	userContainer: {
		marginTop: 40
	},
	message: {
		padding: 10
	}
})

export default ListingDetailsScreen;