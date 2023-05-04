import { ScrollView, StyleSheet } from 'react-native';
import TopBackgroundContent from './topBackgroundContent/TopBackgroundContent';
import Nearest from './nearest/Nearest';
import Popular from './popular/Popular';

const Dashboard = (props:any) => {

	return (
		<ScrollView style={styles.container}>
			<TopBackgroundContent width="90%" />
			<Nearest width="90%" />
			<Popular width="90%" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#FFF',
	}
})

export default Dashboard;