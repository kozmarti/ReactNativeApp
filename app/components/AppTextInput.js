import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles'
function AppTextInput({icon, ...otherProps}) {
	return (
<View style={styles.container}>
{icon && <MaterialCommunityIcons name={icon} size={25} color={colors.danger} style={styles.icon}/>}
<TextInput style={defaultStyles.text} {...otherProps}/>


</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.ormany,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10
	},
	icon: {
		marginRight: 10
	}
})
export default AppTextInput;