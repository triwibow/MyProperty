import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

type Props = {
	width: string
}

const TopBar = (props:Props) => {
	const navigation = useNavigation();
	const { width } = props;

	const styles = StyleSheet.create({
		container: {
			position:'absolute',
			width: width? width:'100%',
			alignSelf:'center',
			paddingVertical: RFValue(28),
			zIndex:99
		}
	});

	const navigate = () => {
		navigation.goBack()
	}

	return (
		
		<View style={styles.container}>
			<TouchableOpacity onPress={navigate}>
				<Image 
					source={require('../../assets/back.png')}
				/>
			</TouchableOpacity>
		</View>	
		
	);
}

export default TopBar;