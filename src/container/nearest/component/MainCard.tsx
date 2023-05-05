import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import BadgeHorizontal from "../../../components/badge/BadgeHorizontal";
import LinearGradient from 'react-native-linear-gradient';
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

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
					<Text style={styles.name}>Grand Sharon Residence</Text>
					<Text style={styles.location}>Sleman, Yogyakarta</Text>
				</View>
				<Text style={styles.price}>Rp. 175 Juta</Text>
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	card: {
		alignSelf:'center',
		position:'relative'
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

})

export default MainCard;