import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';
const styles = StyleSheet.create({
	text: {
		color: colors.wording,
		fontSize: 20,
		...Platform.select({
			ios: {
				fontFamily: "Avenir",
			},
			android: {
				fontFamily: "Roboto"
			}
		})
	}
});

export default styles;