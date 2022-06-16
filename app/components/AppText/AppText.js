import React from 'react';
import { Text, StyleSheet, Platform} from 'react-native';
import colors from '../../config/colors';
import styles from './styles';
function AppText({children, style}) {
	return (
<Text style={[styles.text, style]}>{children}</Text>
	);
}

export default AppText;