import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
	return (
<View style={styles.card}>

<Image style={styles.image} source={image}></Image>
<View style={styles.detailsContainer}>
<AppText style={styles.title}>{title}</AppText>
<AppText style={styles.subTitle}>{subTitle}</AppText>
</View>
</View>
	);
}
const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: "white",
		marginBottom: 20,
		overflow: "hidden",
		elevation: 5
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
	}
})
export default Card;