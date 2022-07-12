import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
	{id: 1,
	title: "Red jacket for sale",
	price: 100,
	image: require("../assets/background1.jpg")
},
{id: 2,
	title: "Books store",
	price: 1000,
	image: require("../assets/background2.jpg")
}
] 
function ListingsScreen({navigation}) {
	return (
<Screen style={styles.screen}>

	<FlatList
	data={listings}
	keyExtractor={listing => listing.id.toString()}
	renderItem={({ item }) => 
	<Card 
	title={item.title}
	subTitle={"$" +item.price}
	image={item.image}
	onPress={() => navigation.navigate("ListingDetails", item)}
	/>
	} />
</Screen>
	);
}
const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.ormany
	}
})
export default ListingsScreen;