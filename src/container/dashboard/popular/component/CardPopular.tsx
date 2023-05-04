import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import BadgeHorizontal from '../../../../components/badge/BadgeHorizontal';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
	name:string,
	location:string,
	type:string,
	bgImage:number,
	bgBadge:string,
	price:string
}

const CardPopular = (props:Props) => {
	const { name, location, type, bgImage, bgBadge, price } = props;
	return (
		<Card style={styles.container}>
			<BadgeHorizontal 
					bgColor={bgBadge}
					text={type}
					textColor='#FFF'
					fontSize={9}
					position='absolute'
					top={6}
					right={6}
					zIndex={1000}
				/>
			<Image 
				style={styles.cover}
				source={bgImage}
			/>
			<Card.Content style={[styles.content]}>
				<View style={styles.shadowProp}>
					<View>
						<Text style={styles.name}>{name} <Image source={require('../../../../assets/checklist.png')} /></Text>
						<Text style={styles.location}><Image source={require('../../../../assets/mapsmall.png')} /> {location}</Text>
					</View>
					<Text style={styles.price}>{price}</Text>
				</View>
			</Card.Content>
		</Card>
	)
}


const styles = StyleSheet.create({
	container: {
		position:'relative',
		paddingHorizontal:0,
		paddingVertical:0,
		overflow:'hidden',
		borderRadius:0,
		width:RFValue(150),
		backgroundColor:'tranparent',
		shadowColor:'transparent',
		borderTopLeftRadius:16,
		borderTopRightRadius:16,
		marginRight:RFValue(14),
	},
	cover: {
		height:RFValue(140),
		width:'100%',
		resizeMode:'cover'
	},
	content: {
		paddingHorizontal:0,
		paddingVertical:0,
	},
	shadowProp: {
		width:'100%',
		height:RFValue(100),
    elevation:2,
		borderLeftWidth:1,
		borderLeftColor:'#EEE',
		borderRightWidth:1,
		borderRightColor:'#EEE',
		backgroundColor:'#FFF',
		borderBottomLeftRadius:12,
		borderBottomRightRadius:12,
		paddingVertical:12,
		paddingHorizontal:8,
		justifyContent:'space-between'
  },
	name: {
		color:"#464646",
		fontSize:RFValue(13),
		fontWeight:'600'
	},
	location: {
		color:"#9D9D9D",
		fontSize:RFValue(9)
	},
	price: {
		color:"#45B549",
		fontSize:RFValue(14),
		fontWeight:'bold',
		textAlign:"right",
	}
})

export default CardPopular;