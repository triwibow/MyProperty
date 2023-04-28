import React, { useState } from 'react';
import { ScrollView,View, Text, StyleSheet, Image, Touchable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FormControl from '../../components/field/FormControl';
import TextField from '../../components/field/TextField';
import Button from '../../components/button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

type Values = {
	name:string,
	email:string,
	password:string,
	password_confirm:string
}

const ValidationSchema = Yup.object().shape({
	name:Yup.string().required('wajib diisi'),
	email:Yup.string().email('email tidak valid').required('wajib diisi'),
	password:Yup.string().required('wajib diisi'),
	password_confirm:Yup.string().oneOf([Yup.ref('password')], 'konfirmasi password tidak sesuai')
		.required('wajib diisi')
});

const Register = (props:any) => {
	const { navigation } = props;

	const [values, setValues] = useState<Values>({
		name: '',
		email:'',
		password:'',
		password_confirm:''
	});

	const toLogin = () => {
		navigation.navigate('Login');
	}

	const onSubmit = (val:Values) => {
		console.log(val);
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<View style={styles.mb25}>
					<Text style={styles.title}>Daftar Akun</Text>
					<Text style={styles.subTitle}>Sebelum kamu jelajahi property mu disini, kamu harus memulai untuk mendaftar dulu.</Text>
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
											name='name'
											label='Nama Lengkap'
											value={values.name}
											touched={touched.name}
											error={errors.name}
											handleChange={setFieldValue}

										/>
									</FormControl>
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
									<FormControl mb={14}>
										<TextField
											name='password_confirm'
											label='Konfirmasi Password'
											value={values.password_confirm}
											touched={touched.password_confirm}
											error={errors.password_confirm}
											handleChange={setFieldValue}

										/>
									</FormControl>
									<Button 
										text='Daftar'
										loading={false}
										onPress={handleSubmit}
									/>
								</>
							);
						}}
					</Formik>

					<View style={{marginTop:RFValue(18)}}>
						<Text style={styles.dha}>
							Sudah mempunyai akun? <Text onPress={toLogin} style={styles.rf}>Masuk</Text>
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

export default Register;