import { TouchableOpacity, Text, StyleSheet, FlexAlignType, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	children: string,
	onPress?: () => void,
	fontSize?: number,
	alignItems?:FlexAlignType,
	mt?:number,
	mb?:number,
	color?:string,
	fw?:TextStyle['fontWeight']
}

const TextButton = ({onPress, children, fontSize, alignItems, mt, mb, color, fw}:Props)=> {
	const styles = StyleSheet.create({
		button:{
			backgroundColor:'transparent',
			alignItems: alignItems?alignItems:'flex-start',
			marginTop:mt? RFValue(mt):0,
			marginBottom:mb? RFValue(mb):0
		},
		text: {
			fontSize:RFValue(fontSize? RFValue(fontSize): RFValue(16)),
			color: color? color:'#67B2E8',
			fontWeight: fw?fw:'bold'
		}
	});

	return (
		<TouchableOpacity 
			style={styles.button}
			onPress={onPress}
		>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	)
}

export default TextButton;