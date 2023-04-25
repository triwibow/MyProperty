import React from 'react';
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import TextFieldMaterial from '../../components/field/TextFieldMaterial';

const Login = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.mb25}>
					<Text style={styles.title}>Masuk</Text>
					<Text style={styles.subTitle}>kamu sudah punya akun silahkan untuk melakukan login, biar bisa jelajahi property mu disini.</Text>
				</View>
				<View>
					<TextFieldMaterial 
						label="Email"
					/>
					<TextFieldMaterial 
						label="Password"
					/>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mb25: {
		marginBottom: RFValue(25)
	},
	container: {
		backgroundColor:'#FFF'
	},	
	content: {
		width:'85%',
		alignSelf:'center',
		paddingTop: RFValue(80)
	},
	title: {
		fontSize:RFValue(28),
		color: '#464646',
		fontWeight:'600'
	},
	subTitle: {
		color: '#787878',
		fontSize: RFValue(13)
	}
});

export default Login;