import { View, Text, StyleSheet } from 'react-native';
import AppBar from './component/AppBar';
import MainCard from './component/MainCard';

const Nearest = (props:any) => {
	const { navigation } = props;
	const onBackPress = () => {
		navigation.navigate('dashboard')
	}

	return (
		<View style={styles.container}>
			<AppBar 
				width='85%'
				onBackPress={onBackPress} 
			/>
			<MainCard width='85%' />
		</View>
	);
}

const styles = StyleSheet.create({
	container:{

	}
})

export default Nearest;