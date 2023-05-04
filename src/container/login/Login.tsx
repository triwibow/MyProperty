import React, { useState } from 'react';
import { ScrollView,View, Text, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FormControl from '../../components/field/FormControl';
import TextField from '../../components/field/TextField';
import Button from '../../components/button/Button';
import TextButton from '../../components/button/TextButton';
import { Formik } from 'formik';
import * as Yup from 'yup';

type Values = {
	email:string,
	password:string
}

const ValidationSchema = Yup.object().shape({
	email:Yup.string().email('email tidak valid').required('wajib diisi'),
	password:Yup.string().required('wajib diisi')
});

const Login = (props: any) => {

	const { navigation } = props;
	const [values, setValues] = useState<Values>({
		email:'',
		password:''
	});

	const toScreen = (screen:string) => {
		navigation.navigate(screen);
	}

	const onSubmit = (val:Values) => {
		navigation.navigate('Main', { screen:'dashboard'});
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.mb25}>
					<Text style={styles.title}>Masuk</Text>
					<Text style={styles.subTitle}>Kamu sudah punya akun silahkan untuk melakukan login, biar bisa jelajahi property mu disini.</Text>
				</View>
				<View>
					<Formik
						initialValues={values}
						onSubmit={onSubmit}
						validationSchema={ValidationSchema}
					>
						{({handleSubmit,setFieldValue, touched, errors, values}) => {
							return (
								<>
									<FormControl mb={10}>
										<TextField
											name='email'
											label='Email'
											value={values.email}
											touched={touched.email}
											error={errors.email}
											handleChange={setFieldValue}

										/>
									</FormControl>
									<FormControl mb={10}>
										<TextField
											name='password'
											label='Password'
											value={values.password}
											touched={touched.password}
											error={errors.password}
											handleChange={setFieldValue}

										/>
									</FormControl>
									<Button 
										text='Login'
										loading={false}
										onPress={handleSubmit}
									/>
								</>
							);
						}}
					</Formik>
					<TextButton
						onPress={() => toScreen('forgotPassword')}
						fontSize={10}
						alignItems='center'
						mt={12}
						mb={28}
					>
						Lupa Password
					</TextButton>

					<View style={{flexDirection:'row', justifyContent:'center', marginBottom:20}}>
						<View style={styles.bgGoogle}>
							<Image 
								style={{width:30, height:30, resizeMode:'contain'}}
								source={require('../../assets/google.png')}
							/>
						</View>
						<View style={styles.bgFb}>
							<Image
								style={{width:30, height:30, resizeMode:'contain'}} 
								source={require('../../assets/fb.png')}
							/>
						</View>
					</View>

					<View>
						<Text style={styles.dha}>
							Kamu belum mempunyai akun ? <Text onPress={() => toScreen('register')} style={styles.rf}>Daftar Dulu</Text>
						</Text>
					</View>
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
	},
	bgGoogle: {
		backgroundColor:'#FFF', 
		width:RFValue(38), 
		height:RFValue(38), 
		alignItems:'center', 
		justifyContent:'center',
		borderRadius:9,
		borderWidth:2,
		borderColor:'#EEE',
		marginRight:10
	},
	bgFb: {
		backgroundColor:'#2D8ACD', 
		width:RFValue(38), 
		height:RFValue(38), 
		alignItems:'center', 
		justifyContent:'center',
		borderRadius:9
	},
	dha: {
		color: '#A5A4A3',
		textAlign:'center',
		fontSize:RFValue(12)
	},
	rf: {
		color: '#787878',
		fontWeight:'bold'
	}
});

export default Login;