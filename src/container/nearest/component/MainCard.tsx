import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import BadgeHorizontal from "../../../components/badge/BadgeHorizontal";
import LinearGradient from 'react-native-linear-gradient';
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import TextButton from "../../../components/button/TextButton";
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
	width?:string
}

const MainCard = (props:Props) => {	
	const [height, setHeight] = useState<number>(0);
	const { width } = props;
	const styleLayout = StyleSheet.create({
		width: {
			width:width? width:'100%'
		},
		height: {
			height:height
		}
	})

	return (
		<Card style={[styleLayout.width, styles.card]}>
			<Card.Cover onLayout={(e) => {
				setHeight(e.nativeEvent.layout.height);
			}}  resizeMode="cover" style={styles.cover} source={require('../../../assets/omah.jpg')} />
			<LinearGradient 
				start={{x: 0.0, y: 0.2}} 
				end={{x: 0.0, y: 1.0}}
				colors={['rgba(196, 196, 196, 0)', '#000000']} 
				style={[styles.overlay, styleLayout.height]}
			/>
			<BadgeHorizontal 
					bgColor='#FFA740'
					text={'Rumah'}
					textColor='#FFF'
					fontSize={12}
					position='absolute'
					top={6}
					right={6}
					zIndex={10}
				/>
			<View style={[styles.topText,styleLayout.height]}>
				<View>
					<Text style={styles.name}>Grand Sharon Residence <Image source={require('../../../assets/check-white.png')} /></Text>
					<Text style={styles.location}>Sleman, Yogyakarta</Text>
				</View>
				<Text style={styles.price}>Rp. 175 Juta</Text>
			</View>
			<Card.Content style={styles.cardContent}>
				<View style={styles.content}>
					<View style={styles.facility}>
						<Image style={{marginRight:8}} source={require('../../../assets/luas.png')} />
						<Text style={styles.desc}>490 m2 Luas Tanah</Text>
					</View>
					<View style={styles.facility}>
						<Image style={{marginRight:8}} source={require('../../../assets/gedung.png')} />
						<Text style={styles.desc}>400 m2 Luas Bangunan </Text>
					</View>
					<View style={styles.facility}>
						<Image style={{marginRight:8}} source={require('../../../assets/kasur.png')} />
						<Text style={styles.desc}>4 Kamar Tidur</Text>
					</View>
					<View style={styles.facility}>
						<Image style={{marginRight:8}} source={require('../../../assets/km.png')} />
						<Text style={styles.desc}>2 Kamar Mandi</Text>
					</View>
					<View style={styles.facility}>
						<Image style={{marginRight:8}} source={require('../../../assets/garasi.png')} />
						<Text style={styles.desc}>1 Garasi</Text>
					</View>
					<View style={styles.facility}>
						<TextButton
							fontSize={12}
							color="#49B548"
							alignItems="center"
							onPress={() => console.log('press')}
						>
							Lihat Semua <Icon name={'chevron-right'} color={'#49B548'} size={10}  />
						</TextButton>
					</View>
				</View>
			</Card.Content>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		alignSelf:'center',
		position:'relative',
		backgroundColor:'#FFF'
	},
	cover: {
		position:'absolute',
		top:0,
		left:0,
		width:'100%',
		height:RFValue(180)
	},
	overlay :{
		position:'absolute',
		top:0,
		left:0,
		width:'100%',
		zIndex:9,
		opacity:0.8
	},
	topText: {
		flexDirection:'row',
		alignItems:'flex-end',
		justifyContent:'space-between',
		paddingVertical:RFValue(22),
		paddingHorizontal:RFValue(18),
		zIndex:99
	},
	name: {
		color: '#FFF',
		fontWeight:'600',
		fontSize:RFValue(14)
	},
	location: {
		color: '#FFF',
		fontSize:RFValue(12)
	},
	price: {
		color: '#FFF',
		fontSize:RFValue(16),
		fontWeight:'800'
	},
	cardContent: {
		paddingVertical:0,
		paddingHorizontal:0,
		backgroundColor:'transparent',
		paddingBottom:0
	},

	content: {
		flex:1,
		flexDirection:'row',
		flexWrap:'wrap',
		minHeight:RFValue(120),
		backgroundColor:'#FFF',
		borderBottomLeftRadius:10,
		borderBottomRightRadius:10,
		paddingVertical:RFValue(15),
		paddingHorizontal:RFValue(20),
		justifyContent:'flex-start',
		alignItems:"flex-start",
		elevation:2,
	},

	facility: {
		flexDirection:'row',
		marginBottom:RFValue(12),
		flexBasis:'50%',
		alignItems:'center'
	},

	desc: {
		color: '#A5A4A3',
		fontWeight:'700',
		fontSize:RFValue(12)
	}

})

export default MainCard;