import { TouchableOpacity, Text, StyleSheet, FlexAlignType } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	children: string,
	onPress?: () => void,
	fontSize?: number,
	alignItems?:FlexAlignType,
	mt?:number,
	mb?:number
}

const TextButton = ({onPress, children, fontSize, alignItems, mt, mb}:Props)=> {
	const styles = StyleSheet.create({
		button:{
			backgroundColor:'transparent',
			alignItems: alignItems?alignItems:'flex-start',
			marginTop:mt? RFValue(mt):0,
			marginBottom:mb? RFValue(mb):0
		},
		text: {
			fontSize:RFValue(fontSize? RFValue(fontSize): RFValue(16)),
			color: '#67B2E8',
			fontWeight:'bold'
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