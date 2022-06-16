import colors from '../config/colors';
import { Platform } from 'react-native';

export default{
	text:{
		color: colors.primary,
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
}
