import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import { View } from 'react-native-web';


function Screen(props) {
	return (
<SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight
		/* paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0*/
	}
})

export default Screen;