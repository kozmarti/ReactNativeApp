import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Platform, Anmated } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import routes from '../navigation/routes';
function WelcomeScreen({ navigation }) {

	
	return (
<ImageBackground 
style={styles.background}
blurRadius={5}
source={require('../assets/background4.jpg')}>
	<View style={styles.logoContainer}>
	<Image 
	fadeDuration={500}
	style={styles.logo} 
	source={require('../assets/logo.png')}/>
<AppText style={styles.title}>Sell What You Don't Need</AppText>

	</View>
	<View style={styles.buttonContainer}>
<AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}></AppButton>
	</View>
	<View style={styles.buttonContainer}>
<AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)}></AppButton>
	</View>
</ImageBackground>
	);
}
const styles = StyleSheet.create({
	title:{
		paddingTop: 30,
		fontWeight: "bold"
	},
	background: {
		flex: 1,
		justifyContent: "flex-end",
		
	},
	buttonContainer: {
		width: "100%",
		padding: 10,
	},
	logo: {
		width: 100,
		height: 100,
			},
	logoContainer: {
		alignItems: "center",
		alignSelf: "center",
		position: "absolute",
		top: 70,
	}
})
export default WelcomeScreen;