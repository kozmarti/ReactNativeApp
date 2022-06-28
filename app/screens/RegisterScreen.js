import React from 'react';
import {StyleSheet, Image} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, SubmitButton, AppFormField} from '../components/forms'; 

function RegisterScreen(props) {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required().email().label("Name"),
		email: Yup.string().required().email().label("Email"),
		password: Yup.string().required().min(4).label("Password")
	})
	return (
		<Screen style={styles.container}>

			<AppForm
			initialValues={{name: '', email: '', password: ''}}
			onSubmit={values => console.log(values)}
			validationSchema={validationSchema}
			>
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
						title="Register" 
						/> 
					
			</AppForm>

		</Screen>
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