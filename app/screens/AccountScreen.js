import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import colors from '../config/colors';
import ListingDetailsScreen from './ListingDetailsScreen';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary
		}
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary
		}
	}
]

function AccountScreen(props) {
	return (
<Screen style={styles.screen}> 
<View style={styles.container}>
	<ListItem
	title="Maria Smith"
	subTitle="maria@smith.com"
	image={require('../assets/student.jpg')}
	/>
	</View>

	<View style={styles.container}>
	<FlatList
			data={menuItems}
			keyExtractor={menuItem => menuItem.title}
			ItemSeparatorComponent={ListItemSeparator}
			renderItem={({item}) =>
					<ListItem
					title={item.title}
					IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
					/>
			}
/>

	</View>
	<ListItem
	title="Log Out"
	IconComponent={
		<Icon name="logout" backgroundColor={colors.danger}/>
	}
	/>
</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.ormany
	},
container: {
	marginVertical: 20
}
})

export default AccountScreen;