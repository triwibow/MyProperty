import { View, Text, Image, StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const First = () => {
	return (
		<View style={styles.container}>
			<Image 
				source={require('../../assets/slide1.png')}
			/>
			<Text style={styles.title}>Discover the best property</Text>
			<Text style={styles.subTitle}>Untuk keluarga harmonis demi menentukan tempat tinggal masa depan yang nyaman</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		paddingTop: RFValue(120),
		alignItems:'center',
		width:'90%',
		alignSelf:'center'
	},
	title: {
		textAlign:'center'
	},
	subTitle: {
		textAlign:'center'
	}
})

export default First;