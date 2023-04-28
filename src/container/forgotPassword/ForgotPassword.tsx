import React, { useState } from 'react';
import { ScrollView,View, Text, StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FormControl from '../../components/field/FormControl';
import TextField from '../../components/field/TextField';
import Button from '../../components/button/Button';
import TopBar from '../../components/navbar/TopBar';
import { Formik } from 'formik';
import * as Yup from 'yup';

type Values = {
	email:string,
	password:string
}

const ValidationSchema = Yup.object().shape({
	email:Yup.string().email('email tidak valid').required('wajib diisi')
});

const ForgotPassword = (props: any) => {

	const { navigation } = props;
	const [values, setValues] = useState<Values>({
		email:'',
		password:''
	});

	const onSubmit = (val:Values) => {
		console.log(val);
	}

	return (
		<ScrollView style={styles.container}>
			<TopBar
				width={'85%'}
			/>
			<View style={styles.content}>
				<View style={styles.mb25}>
					<Text style={styles.title}>Lupa Password</Text>
					<Text style={styles.subTitle}>Masukan Email kamu untuk mendapatkan password baru.</Text>
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
									<Button 
										text='Berikutnya'
										loading={false}
										onPress={handleSubmit}
										mb={20}
									/>
								</>
							);
						}}
					</Formik>
					<View>
						<Text style={styles.dha}>
							Tunggu untuk menerima konfirmasi kode kamu yang masuk diemail ya.
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

export default ForgotPassword;