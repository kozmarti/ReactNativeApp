import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

import { setStatusBarHidden } from 'expo-status-bar';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
	id: 1,
	title: 'En informatique, un fichier texte ou fichier texte brut ou fichier texte simple est un fichier dont le contenu représente uniquement une suite de caractères ',
	description: 'D1En informatique, un fichier texte ou fichier texte brut ou fichier texte simple est un fichier dont le contenu représente uniquement une suite de caractères',
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
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);
	const handleDelete = message => {
		setMessages(messages.filter(m => m.id !== message.id))
	};

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
			renderRightActions={() =>
				<ListItemDeleteAction
				onPress={()=>handleDelete(item)}/>}
			/>
			)}
			ItemSeparatorComponent={ListItemSeparator}
			refreshing={refreshing}
			onRefresh={() => {
				setMessages([
					{
						id: 2,
						title: 'T2',
						description: 'D2',
					image: require('../assets/background4.jpg')	
					},
				])
			}}
			/>
</Screen>
	);
}

const styles = StyleSheet.create({
})
export default MessagesScreen;