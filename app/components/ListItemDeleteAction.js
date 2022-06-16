import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
	return (
		<TouchableWithoutFeedback style={styles.container} onPress={onPress}>
<View>
	<MaterialCommunityIcons name="trash-can" size={35} color={colors.white}/>
	</View>
	</TouchableWithoutFeedback>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
		height: "100%"
	}
})
export default ListItemDeleteAction;