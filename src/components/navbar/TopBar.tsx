import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	width: string,
	onPress: () => void
}

const TopBar = (props:Props) => {
	const { width, onPress } = props;

	const styles = StyleSheet.create({
		container: {
			position:'absolute',
			width: width? width:'100%',
			alignSelf:'center',
			paddingVertical: RFValue(28),
			zIndex:99
		}
	});

	return (
		
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<Image 
					source={require('../../assets/back.png')}
				/>
			</TouchableOpacity>
		</View>	
		
	);
}

export default TopBar;