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
	ml?:number,
	mr?:number,
	px?:number,
	bgColor?:string,
	textColor?:string,
	borderColor?:string
	width?:number
}

const ButtonIcon = (props: Props) => {
	const { text, onPress, loading, mb, mt,ml,mr,px, bgColor, icon, textColor, borderColor, width } = props;

	const styleLayout = StyleSheet.create({
		button: {
			backgroundColor:bgColor? bgColor:'#45B549',
			paddingLeft:0,
			paddingRight:0,
			padding:0,
			paddingHorizontal: px? RFValue(px):0,
			borderRadius: RFValue(10),
			marginBottom:mb?RFValue(mb):0,
			marginTop:mt?RFValue(mt):0,
			marginLeft:ml?RFValue(ml):0,
			marginRight:mr?RFValue(mr):0,
			borderWidth: borderColor? 1:0,
			borderColor: borderColor? borderColor:'transparent',
			...(width && {
				width: width? RFValue(width):'100%',
			})
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