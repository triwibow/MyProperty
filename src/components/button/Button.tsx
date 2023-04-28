import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button as ButtonPaper } from 'react-native-paper';

type Props = {
	text:string,
	icon?:string,
	loading?:boolean,
	onPress: () => void
}

const Button = (props: Props) => {
	const { text, onPress, loading, icon } = props;
	return (
		<ButtonPaper 
			style={styles.button}
			onPress={onPress}
			loading={loading}
			icon={icon}
			mode="outlined"
		>
			{!loading && (<Text style={styles.text}>{text}</Text>)}
		</ButtonPaper>
	)
}

const styles = StyleSheet.create({
	button: {
		width:"100%",
		backgroundColor:'#45B549',
		padding:8,
		borderRadius: RFValue(10),
		borderColor:'transparent'
	},
	text: {
		fontSize: RFValue(16),
		color:'#FFF',
		textAlign: 'center',
		fontWeight:'bold',
	}
})

export default Button;