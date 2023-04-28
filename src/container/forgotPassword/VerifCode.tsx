import React, { useState, useRef } from 'react';
import { ScrollView,View, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FormControl from '../../components/field/FormControl';
import Button from '../../components/button/Button';
import TopBar from '../../components/navbar/TopBar';
import { Formik } from 'formik';
import * as Yup from 'yup';
import OTPTextInput from 'react-native-otp-textinput';

type Values = {
	code:string
}

const ValidationSchema = Yup.object().shape({
	code:Yup.string().required('wajib diisi'),
});

const VerifEmail = (props:any) => {
	const { changeScreen } = props;
	const otpInput = useRef(null);

	const [values, setValues] = useState<Values>({
		code:''
	});

	const back = () => {
		changeScreen(0);
	}

	const onSubmit = (val:Values) => {
		console.log(val);
	}

	return (
		<ScrollView style={styles.container}>
			<TopBar
				width={'85%'}
				onPress={back}
			/>
			<View style={styles.content}>
				<View style={styles.mb25}>
					<Text style={styles.title}>Verifikasi</Text>
					<Text style={styles.subTitle}>Masukan kode kamu yang sudah dikirim dari email kamu.</Text>
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
									<FormControl mb={14}>
										<OTPTextInput 
											ref={otpInput}
											inputCount={4}
											handleTextChange={(val:string) => setFieldValue('code', val)}
											containerStyle={{marginBottom:10}}
											textInputStyle={{flexBasis:'18%', borderColor:'#4EB647',borderWidth:1, borderBottomWidth:1, borderRadius:5}}
										/>
										{touched.code && errors.code && (
											<Text style={styles.textError}>{errors.code}</Text>
										)}
									</FormControl>
									
									<Button 
										text='Verifikasi'
										loading={false}
										onPress={handleSubmit}
									/>
								</>
							);
						}}
					</Formik>

					<View style={{marginTop:RFValue(18)}}>
						<Text style={styles.dha}>
							Jika kamu masih kesulitan dalam kata sandi dan fitur keamangan anda. Silahkan hubungi CS
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
	},
	textError:{
		fontSize:RFValue(12),
		marginLeft:12,
		color:'#D44242'
	}
});

export default VerifEmail;