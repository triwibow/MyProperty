import { View, Text, Image, StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';
import Button from '../../components/button/Button';
import ButtonTransparent from '../../components/button/ButtonTransaparent'; 

const Fourth = (props:any) => {
	const { navigation } = props;

	const toLogin = () => {
		navigation.navigate('login');
	}

	const toRegister = () => {
		navigation.navigate('register');
	}

	return (
		<View style={styles.container}>
			<Image 
				source={require('../../assets/slide4.png')}
				style={styles.img}
			/>
			<Text style={styles.title}>Mudah & Cepat</Text>
			<Text style={styles.subTitle}>Mulai jelajahi properti Sekarang melalui aplikasi myproperti</Text>
			<Button 
				text='Masuk'
				onPress={toLogin}
				mb={12}
				mt={14}
			/>

			<ButtonTransparent 
				text='Daftar'
				onPress={toRegister}
			/>
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
		color:'#787878',
		width:'80%'
	}
})

export default Fourth;