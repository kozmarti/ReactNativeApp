import React, { useState } from 'react';
import {StyleSheet, Image} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, SubmitButton, AppFormField, ErrorMessage} from '../components/forms'; 
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import usersApi from '../api/users';
import useApi from "../hooks/useApi";
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(authApi.login)
  	const auth = useAuth();
  	const [error, setError] = useState();

  	const handleSubmit = async (userInfo) => {
    	const result = await registerApi.request(userInfo);

    	if (!result.ok) {
      	if (result.data) setError(result.data.error);
      	else {
        setError("An unexpected error occurred.");
        
      	}
      	return;
    	}

    	const { data: authToken } = await loginApi.request(
      		userInfo.email,
      		userInfo.password
    	);
    	auth.login(authToken);
  };
	
	return (<>
		<ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
		<Screen style={styles.container}>
			<Image 
			style={styles.logo}
			source={require("../assets/logo.png")}/>
			<AppForm
			initialValues={{name: '', email: '', password: ''}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			>
				<ErrorMessage error={error} visible={error} />
				<AppFormField
						autoCapitalze="none"
						autoCorrect={false}
						name="name"
						icon="account"
						placeholder="Name"
						/>
					<AppFormField
						autoCapitalze="none"
						autoCorrect={false}
						keyboardType="email-address"
						name="email"
						icon="email"
						placeholder="Email"
						/>
						<AppFormField
						autoCapitalze="none"
						autoCorrect={false}
						icon="lock"
						name="password"
						placeholder="Password"
						textContentType="password"
						secureTextEntry={true}
						/>
						<SubmitButton 
						color="secondary"
						title="Register" 
						/> 
					
			</AppForm>

		</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingTop: 50
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginBottom: 20,
		marginTop: 50
	}
})
export default RegisterScreen;