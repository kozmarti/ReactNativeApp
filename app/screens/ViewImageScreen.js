import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons style={styles.closeIcon} name="email"/>
			<View style={styles.closeIcon}/>
			<View style={styles.deleteIcon}/>
<Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>
</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: "absolute",
		top: 40,
		left: 30
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
		position: "absolute",
		top: 40,
		right: 30
	},
	image: {
		width: "100%",
		height: "100%",
	},
	container: {
		backgroundColor: "black",
		flex: 1
	}
});

export default ViewImageScreen;