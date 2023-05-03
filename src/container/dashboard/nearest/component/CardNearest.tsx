import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import BadgeHorizontal from '../../../../components/badge/BadgeHorizontal';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
	price:string,
	location:string,
	type:string,
	bgImage:number
}

const CardNearest = (props:Props) => {

	const { price, location, type, bgImage } = props;

	return (
		
		<Card style={styles.cardNearest}>
			<Card.Content style={styles.cardNearestContent}>
				
				<LinearGradient 
					start={{x: 0.0, y: 0.2}} 
					end={{x: 0.0, y: 1.0}}
					colors={['rgba(196, 196, 196, 0)', '#000000']} 
					style={styles.overlay}
				/>
				<BadgeHorizontal 
					bgColor='#FFA740'
					text={type}
					textColor='#FFF'
					fontSize={9}
					position='absolute'
					top={6}
					right={6}
					zIndex={10}
				/>
				<Image
					style={styles.bgNearest} 
					source={bgImage}
				/>
				<View style={{paddingHorizontal:RFValue(6), paddingVertical:RFValue(6), zIndex:99}}>
					<Text style={styles.price}>{price}</Text>
					<Text style={styles.location}>{location}</Text>
				</View>
				
			</Card.Content>
		</Card>
	)
}


const styles = StyleSheet.create({
	cardNearest: {
		padding:0,
		borderRadius:14,
		overflow:'hidden',
		backgroundColor:'transparent',
		position:'relative'
	},
	cardNearestContent: {
		paddingVertical:0,
		paddingHorizontal:0,
		height:RFValue(140),
		justifyContent:'flex-end',
		backgroundColor:'transparent'
	},
	overlay :{
		position:'absolute',
		top:0,
		left:0,
		width:'100%',
		height:'100%',
		zIndex:9,
		opacity:0.8
	},
	bgNearest: {
		width:'100%',
		height:'100%',
		resizeMode:'cover',
		position:'absolute'
	},
	price: {
		color:'#FFF',
		fontSize:RFValue(14),
		fontWeight:'bold'
	},
	location: {
		color:'#FFF',
		fontSize:RFValue(8)
	}
})

export default CardNearest;