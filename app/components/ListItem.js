import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({title, subTitle, image, IconComponent: IconComponent, onPress, renderRightActions}) {
	return (
		<GestureHandlerRootView>
		<Swipeable renderRightActions={renderRightActions}>
		<TouchableHighlight 
		underlayColor={colors.ormany}
		onPress={onPress}>
<View style={styles.container}>
	{IconComponent}
{image && <Image source={image} style={styles.photo}/>}
<View style={styles.detailsContainer}>
	<AppText style={styles.title} numberOfLines={1}>{title}</AppText>
	{subTitle &&<AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
</View>

<MaterialCommunityIcons name="chevron-right" size={25} color={colors.danger}/>
</View>
</TouchableHighlight>
</Swipeable>
</GestureHandlerRootView>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
		alignItems: "center"
	},
	photo: {
		width: 70,
		height:70,
		borderRadius: 35,
	},
	title: {
		fontSize: 15,

	},
	subTitle: {
		fontSize: 15,
		fontWeight: "normal",
		color: colors.danger

	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1
	}
})
export default ListItem;