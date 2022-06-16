import React from 'react';
import { StyleSheet, Image, View} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';


function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}><MaterialCommunityIcons color="white" size={30} name="close"/></View>
			<View style={styles.deleteIcon}><MaterialCommunityIcons color="white" size={30} name="trash-can-outline"/></View>
<Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}/>
</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30
	},
	deleteIcon: {
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