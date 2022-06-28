import React from 'react';
import { Text, StyleSheet, Platform} from 'react-native';
import colors from '../../config/colors';
import styles from './styles';
function AppText({children, style, ...otherProps}) {
	return (
<Text style={[styles.text, style]} {...otherProps}>{children}</Text>
	);
}

export default AppText;