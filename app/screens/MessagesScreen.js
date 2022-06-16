import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

import { setStatusBarHidden } from 'expo-status-bar';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
	{
	id: 1,
	title: 'T1',
	description: 'D1',
image: require('../assets/background.jpg')	
},
{
	id: 2,
	title: 'T2',
	description: 'D2',
image: require('../assets/background4.jpg')	
},
{
	id: 3,
	title: 'T3',
	description: 'D3',
image: require('../assets/background3.jpg')	
},
]
function MessagesScreen(props) {
	return (
		<Screen>

			<FlatList
			data={messages}
			keyExtractor={message => message.id.toString()}
			renderItem={({item}) => (
			<ListItem
			title={item.title}
			subTitle={item.description}
			image={item.image}
			onPress={() => console.log("Message selected", item)}
			renderRightActions={() => <View style={{
				backgroundColor: "red",
				width: 70
			}}></View>}
			/>
			)}
			ItemSeparatorComponent={ListItemSeparator}
			/>
</Screen>
	);
}

const styles = StyleSheet.create({
})
export default MessagesScreen;