import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ListItem({title, subTitle, image, onPress, renderRightActions}) {
	return (
		<GestureHandlerRootView>
		<Swipeable renderRightActions={renderRightActions}>
		<TouchableHighlight 
		underlayColor={colors.ormany}
		onPress={onPress}>
<View style={styles.container}>
<Image source={image} style={styles.photo}/>
<View>
	<AppText style={styles.title}>{title}</AppText>
	<AppText style={styles.subTitle}>{subTitle}</AppText>
</View>
</View>
</TouchableHighlight>
</Swipeable>
</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15
	},
	photo: {
		width: 70,
		height:70,
		borderRadius: 35,
		marginRight: 10
	},
	title: {
		fontSize: 15,

	},
	subTitle: {
		fontSize: 15,
		fontWeight: "normal",
		color: colors.secondary

	}
})
export default ListItem;