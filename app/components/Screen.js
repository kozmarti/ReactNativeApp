import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import { View } from 'react-native-web';


function Screen({children, style}) {
	return (
<SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1
		/* paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0*/
	}
})

export default Screen;