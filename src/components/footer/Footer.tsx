import { View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Footer = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.textParent}>
				Terms & Conditions
				<Text style={styles.textChild}> policies agreements</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop:RFValue(10),
		paddingBottom:RFValue(10)
	},
	textParent: {
		textAlign:'center',
		color:'#787878',
		fontWeight:'bold',
		fontSize:RFValue(12)
	},
	textChild: {
		color:'#A5A4A3',
		fontWeight:'normal'
	}
})

export default Footer;