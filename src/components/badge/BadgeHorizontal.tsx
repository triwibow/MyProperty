import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	bgColor:string,
	textColor:string,
	text:string,
	fontSize:number,
	position?:ViewStyle['position'],
	top?:number,
	left?:number,
	right?:number,
	bottom?:number,
	zIndex?:number
}

const BadgeHorizontal = (props:Props) => {
	const { bgColor, textColor, text, fontSize, position, top, left, bottom, right, zIndex } = props;
	const styles = StyleSheet.create({
		badge: {
			backgroundColor:bgColor,
			borderRadius:7,
			paddingHorizontal:10,
			paddingVertical:2,
			...(position && {position:position}),
			...(top && {top:RFValue(top)}),
			...(left && {left:RFValue(left)}),
			...(bottom && {bottom:RFValue(bottom)}),
			...(right && {right:RFValue(right)}),
			...(zIndex && {zIndex:zIndex})
		},
		text: {
			color:textColor,
			textAlign:'center',
			fontSize: RFValue(fontSize)
		}
	})

	return (
		<View style={styles.badge}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}

export default BadgeHorizontal;