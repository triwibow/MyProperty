import { Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	name: string,
	label: string,
	value: string | undefined,
	handleChange: (field: string, value:any) => void,
	touched: boolean | undefined,
	error: string | undefined
}

const TextField = (props:Props) => {
	const {
		name,
		label,
		value,
		handleChange,
		touched,
		error
	} = props;

	const isError = touched && error ? true:false;

	return (
		<>
			<TextInput
				mode='outlined'  
				label={label}
				activeOutlineColor='#4EB647'
				error={isError}
				value={value}
				onChangeText={(text) => {
					handleChange(name,text)
				}}
				outlineColor='#E5E5E5'
				style={styles.input}
			/>
			{isError && (
				<Text style={styles.textError}>{error}</Text>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	input:{
		backgroundColor:'#FFF'
	},
	textError:{
		fontSize:RFValue(14),
		marginLeft:12,
		color:'#D44242'
	}
})

export default TextField;
