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

function AppPicker({icon, items, numberOfColumns=1, onSelectItem, placeholder, selectedItem, PickerItemComponent = PickerItem, width="100%"}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
		<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
<View style={[styles.container, {width}]}>
{icon && <MaterialCommunityIcons name={icon} size={25} color={colors.danger} style={styles.icon}/>}

{selectedItem ? (
<AppText style={styles.text}>{selectedItem.label}</AppText>
	) : (
	<AppText style={styles.placeholder}>{placeholder}</AppText>
	)}

{icon && <MaterialCommunityIcons name="chevron-down" size={25} color={colors.danger}/>}

</View>
</TouchableWithoutFeedback>
<Modal visible={modalVisible} animationType="slide">

	<Button title="Close" onPress={() => setModalVisible(false)}/>

	<FlatList
	data={items}
	keyExtractor={item => item.value.toString()}
	numColumns={numberOfColumns}
	renderItem={({item}) => (
	<PickerItemComponent
	item={item}
	label={item.label} 
	onPress={()=> {
		setModalVisible(false); 
		onSelectItem(item);
	}}
	/> 
	)}

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
		padding: 15,
		marginVertical: 10
	},
	icon: {
		marginRight: 10
	},
	text:{
		flex: 1
	},
	placeholder: {
		color: colors.danger,
		flex: 1
	}

})
export default AppPicker;