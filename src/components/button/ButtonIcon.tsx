import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button as ButtonPaper } from 'react-native-paper';

type Props = {
	text:string,
	loading?:boolean,
	onPress: () => void,
	icon:number,
	mb?:number,
	mt?:number,
	bgColor?:string,
	textColor?:string,
	borderColor?:string
}

const ButtonIcon = (props: Props) => {
	const { text, onPress, loading, mb, mt, bgColor, icon, textColor, borderColor } = props;

	const styleLayout = StyleSheet.create({
		button: {
			width:"100%",
			backgroundColor:bgColor? bgColor:'#45B549',
			padding:0,
			borderRadius: RFValue(10),
			marginBottom:mb?RFValue(mb):0,
			marginTop:mt?RFValue(mt):0,
			borderWidth: borderColor? 1:0,
			borderColor: borderColor? borderColor:'transparent'
		},
		text: {
			color:textColor? textColor:'#FFF'
		}
	})

	return (
		<ButtonPaper 
			style={styleLayout.button}
			onPress={onPress}
			loading={loading}
			mode="outlined"
		>
			{!loading && (
				<>
					<Image source={icon}/>
					<Text style={[styles.text, styleLayout.text]}>  {text}</Text>
				</>
			)}
		</ButtonPaper>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: RFValue(12),
		textAlign: 'center',
		fontWeight:'bold'
	},
	iconWrapper:{

	}
})

export default ButtonIcon;