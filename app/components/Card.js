import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { Image } from 'react-native-expo-image-cache';

function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
<View style={styles.card}>

<Image style={styles.image} tint="light" preview={{ uri: thumbnailUrl }} uri={imageUrl}></Image>
<View style={styles.detailsContainer}>
<AppText style={styles.title}>{title}</AppText>
<AppText style={styles.subTitle}>{subTitle}</AppText>
</View>
</View>
</TouchableWithoutFeedback>
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
		color: colors.danger
	}
})
export default Card;