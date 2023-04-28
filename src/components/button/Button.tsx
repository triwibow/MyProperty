import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button as ButtonPaper } from 'react-native-paper';

type Props = {
	text:string,
	icon?:string,
	loading?:boolean,
	onPress: () => void,
	mb?:number,
	mt?:number
}

const Button = (props: Props) => {
	const { text, onPress, loading, icon, mb, mt } = props;

	const styles = StyleSheet.create({
		button: {
			width:"100%",
			backgroundColor:'#45B549',
			padding:RFValue(2),
			borderRadius: RFValue(10),
			borderColor:'transparent',
			marginBottom:mb?RFValue(mb):0,
			marginTop:mt?RFValue(mt):0
		},
		text: {
			fontSize: RFValue(14),
			color:'#FFF',
			textAlign: 'center',
			fontWeight:'bold',
		}
	})

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

export default Button;