import React from 'react';
import { FormikContext, useFormikContext } from 'formik';
import AppButton from '../AppButton';

function SubmitButton({title, color="primary"}) {
	const {handleSubmit} = useFormikContext(); 
	return (
		<AppButton
		color={color}
		title={title}
		onPress={handleSubmit} /> 
	);
}

export default SubmitButton;