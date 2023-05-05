import { View, Text, StyleSheet } from 'react-native';
import AppBar from './component/AppBar';
import MainCard from './component/MainCard';

const Nearest = () => {
	return (
		<View style={styles.container}>
			<AppBar width='85%' />
			<MainCard width='85%' />
		</View>
	);
}

const styles = StyleSheet.create({
	container:{

	}
})

export default Nearest;