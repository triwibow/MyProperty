import { ScrollView, StyleSheet } from 'react-native';
import TopBackgroundContent from './topBackgroundContent/TopBackgroundContent';

const Dashboard = (props:any) => {

	return (
		<ScrollView style={styles.container}>
			<TopBackgroundContent width="85%" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#FFF',
	}
})

export default Dashboard;