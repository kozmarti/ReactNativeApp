import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={require('../assets/background2.jpg')}></Image>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Story Book</AppText>
				<AppText style={styles.subTitle}>100$</AppText>
				<View style={styles.userContainer}>
				<ListItem
				image={require('../assets/student.jpg')}
				title="Maria"
				subTitle="5 listings"
				/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		marginBottom: 20,
		overflow: "hidden",
	},
	image: {
		height: 200,
		width: "100%",
	},
	detailsContainer: {
		padding: 20
	},
	title: {
		marginBottom: 7
	},
	subTitle: {
		color: colors.primary
	},
	userContainer: {
		marginVertical: 40
	}
})

export default ListingDetailsScreen;