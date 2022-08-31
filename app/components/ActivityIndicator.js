import React from 'react';
import LottieView from 'lottie-react-native';


function ActivityIndicator({visible=false}) {
	if (!visible) return null;
	return <LottieView loop source={require("../assets/animation/loader.json")}/>
};

export default ActivityIndicator;