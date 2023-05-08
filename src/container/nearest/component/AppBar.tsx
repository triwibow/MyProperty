import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	width?: string,
	onBackPress: () => void
}

const AppBar = (props:Props) => {
	const { width, onBackPress } = props;

	const styleLayout = StyleSheet.create({
		width: {
			width: width? width:'100%',
		}
	})

	return (
		
		<View style={[styles.container, styleLayout.width]}>
			<View style={{flexDirection:'row', alignItems:'center'}}>
				<TouchableOpacity
					onPress={onBackPress} 
					style={{marginRight:14}}>
					<Image 
						source={require('../../../assets/back.png')}
					/>
				</TouchableOpacity>
				<Text style={styles.text}>Rumah Terdekat</Text>
			</View>
			<Image 
				source={require('../../../assets/searchGrey.png')}
			/>
		</View>	
		
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection:'row',
		alignItems:'center',
		alignSelf:'center',
		justifyContent:'space-between',
		paddingVertical: RFValue(28),
		zIndex:999
	},
	text: {
		color:'#3F3F3F',
		fontWeight:'700',
		fontSize:RFValue(18)
	}
});

export default AppBar;