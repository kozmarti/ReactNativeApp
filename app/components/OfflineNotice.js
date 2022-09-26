import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { NetInfoCellularGeneration, useNetInfo } from '@react-native-community/netinfo';

function OfflineNotice(props) {
	const netInfo = useNetInfo();
	if(netInfo.type !=="unknown" && netInfo.isInternetReachable === false)
		return (
	<View style={styles.container}>
		<AppText style={styles.text}>No Internet Connection</AppText>
	</View>
		);
	return null;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: colors.secondary,
		elevation: 2,
		height: 50,
		justifyContent: "center",
		position: 'absolute',
		top: Constants.statusBarHeight,
		width: "100%",
		zIndex: 1000,
	},
	text: {
		color: colors.ormany
	}
})

export default OfflineNotice;