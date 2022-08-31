import client from "./client";

const endpoint = '/listings';
const getListings = () => client.get(endpoint);
const addListing = listing => {
	// content-type
	// application/json
	// multipart/form-data
	
}
export default {
	getListings,
};