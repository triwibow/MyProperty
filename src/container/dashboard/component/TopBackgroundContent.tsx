import { View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import AppBar from './AppBar';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonIcon from '../../../components/button/ButtonIcon';

type Props = { 
	width?:string
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopBackgroundContent = (props:Props) => {
	const { width } = props;

	const styleLayout = StyleSheet.create({
		width: {
			width: width? width:'100%'
		}
	});
	
	return (
		<View style={styles.container}>
			<Image
				source={require('../../../assets/bgImage.png')} 
				style={styles.bgImage} 
			/>
			<View style={styles.overlay}></View>
			<View style={[styles.content, styleLayout.width]}>
				<AppBar mb={12} />
				<Text style={styles.title}>Hai, mau cari tempat tinggal ya?</Text>
				<Text style={styles.subTitle}>Yuk...cari sesuai kebutuhanmu disini !</Text>

				<View style={styles.buttonWrapper}>
					<View style={{flexBasis:'48%'}}>
						<ButtonIcon 
							text='Beli'
							textColor='#55B645'
							bgColor='#FFF'
							loading={false}
							onPress={() => console.log('oke')}
							icon={require('../../../assets/home.png')}
						/>
					</View>
					<View style={{flexBasis:'48%'}}>
						<ButtonIcon 
							text='Sewa'
							textColor='#FFF'
							bgColor='transparent'
							loading={false}
							onPress={() => console.log('oke')}
							icon={require('../../../assets/car.png')}
							borderColor='#FFF'
						/>
					</View>
				</View>
			</View>
		</View>
	);	
}

const styles = StyleSheet.create({
	container: {
		position:'relative',
		flex:1,
		borderBottomLeftRadius:RFValue(40),
		borderBottomRightRadius:RFValue(40),
		overflow:'hidden'
	},
	bgImage: {
		position:'absolute',
		width:screenWidth,
		bottom:0,
		resizeMode:'cover'
	},
	overlay:{
		position:'absolute',
		top:0,
		left:0,
		bottom:0,
		right:0,
		width:'100%',
		backgroundColor:'rgba(73, 181, 72, 0.74)',
	
	},
	content: {
		alignSelf:'center',
		paddingTop: RFValue(24),
		paddingBottom: RFValue(80),
	},
	title: {
		color: '#FFF',
		fontSize:RFValue(23),
		width:'70%',
		fontWeight:'bold',
		marginBottom:13
	},
	subTitle: {
		color: '#FFF',
		fontSize:RFValue(12),
		marginBottom:RFValue(22)
	},
	buttonWrapper: {
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	}
});



export default TopBackgroundContent;