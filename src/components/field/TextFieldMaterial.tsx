import { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	label: string
}

const TextFieldMaterial = (props: Props) => {
	const { label } = props;
	const [focus, setFocus] = useState(false);

	return (
		<View style={styles.container}>
			{focus && (
				<Text style={[styles.label, focus && (styles.colorFocus)]}>{label}</Text>
			)}
			<TextInput 
				style={[styles.input, focus && (styles.borderFocus)]}
				placeholder={focus? '':label}
				onFocus={() => {
					setFocus(true);
				}}
				onBlur={() => {
					setFocus(false);
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	colorFocus: {
		color: '#4EB647'
	},
	borderFocus: {
		borderColor: '#4EB647'
	},
	container: {
		position:'relative'
	},
	input: {
		width:"100%",
		borderWidth: 1,
    paddingVertical: RFValue(10),
		paddingHorizontal: RFValue(14),
		marginBottom:RFValue(12),
		borderRadius:7,
		borderColor:'#E5E5E5',
		fontSize:RFValue(13),
		color: '#6A6A6A'
	},
	label: {
		position:'absolute',
		verticalAlign:'middle',
		height:RFValue(20),
		marginTop:RFValue(-10),
		left:RFValue(10),
		zIndex:100,
		backgroundColor:'#FFF',
		paddingLeft:RFValue(6),
		paddingRight:RFValue(6),
		fontSize:RFValue(12)
	}
});

export default TextFieldMaterial;