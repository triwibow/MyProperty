import { View, Text, Image, StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const First = (props:any) => {
	return (
		<View style={styles.container}>
			<Image 
				source={require('../../assets/slide3.png')}
				style={styles.img}
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
	img: {
		marginBottom:RFValue(28)
	},
	title: {
		textAlign:'center',
		color:'#464646',
		fontSize:RFValue(21),
		fontWeight:'bold',
		marginBottom:RFValue(10)
	},
	subTitle: {
		textAlign:'center',
		fontSize:RFValue(13),
		color:'#787878'
	}
})

export default First;