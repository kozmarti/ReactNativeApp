import React, { useState } from 'react';
import { View, StyleSheet, Platform, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles'
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native';
import { Modal } from 'react-native';
import PickerItem from './PickerItem';
function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
		<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
<View style={styles.container}>
{icon && <MaterialCommunityIcons name={icon} size={25} color={colors.danger} style={styles.icon}/>}
<AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
{icon && <MaterialCommunityIcons name="chevron-down" size={25} color={colors.danger}/>}

</View>
</TouchableWithoutFeedback>
<Modal visible={modalVisible} animationType="slide">

	<Button title="Close" onPress={() => setModalVisible(false)}/>
	<FlatList
	data={items}
	keyExtractor={item => item.value.toString()}
	renderItem={({item}) => <PickerItem label={item.label} onPress={()=> {setModalVisible(false); onSelectItem(item)}}/> }
	/>
</Modal>
</>
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
	},
	text:{
		flex: 1
	}
})
export default AppPicker;