import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";
import BadgeHorizontal from "../../../components/badge/BadgeHorizontal";
import { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

type Feature = {
	id:number,
	icon:number,
	desc:string
}

type Props = {
	name:string,
	location:string,
	price:string,
	feature: Feature[],
	type:string,
	image:number
}

const List = (props:Props) => {	
	const [height, setHeight] = useState<number>(0);
	const { name, location, price, feature, type, image } = props;
	const styleLayout = StyleSheet.create({
		width: {
			width:'100%'
		},
		height: {
			height:height
		},
		cardImage: {
			width:RFValue(height),
			height:RFValue(height),
			borderRadius:12
		},
	})

	return (
		<Card style={[styleLayout.width, styles.card]}>
			<Card.Content style={styles.cardContent}>
				<View style={styles.content}>
					<View>
						<Image 
							source={image}
							style={styleLayout.cardImage}
						/>
						<BadgeHorizontal 
							bgColor='#FFA740'
							text={type}
							textColor='#FFF'
							fontSize={9}
							position='absolute'
							top={6}
							left={6}
							zIndex={10}
						/>
					</View>
					<View style={[styles.desc]} onLayout={(e) => setHeight(e.nativeEvent.layout.height)}>
						<Text style={styles.name}> 
							{name} <Image source={require('../../../assets/checklist.png')} />
						</Text>
						<Text style={styles.location}>
							<Image source={require('../../../assets/locgrey.png')} /> {location} 
						</Text>
						
						<View style={{flexDirection:'row'}}>
							{feature.map(item => {
								return (
									<View style={{flexDirection:'row', alignItems:'center', marginRight:10}} key={item.id}>
										<Image 
											source={item.icon}
											style={{marginRight:5, width:RFValue(20), height:RFValue(20), resizeMode:'contain'}} 
										/>
										<Text style={styles.feature}>
											{item.desc}
										</Text>
									</View>
								)
							})}
						</View>

						<Text style={styles.price}>{price}</Text>
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
		backgroundColor:'#FFF',
		shadowColor:'transparent',
		marginBottom:18
	},
	cardContent: {
		paddingVertical:0,
		paddingHorizontal:0,
		backgroundColor:'transparent',
		paddingBottom:0
	},

	content: {
		flexDirection:'row',
		backgroundColor:'#FFF',
		borderRadius:12,
		paddingVertical:0,
		paddingHorizontal:0,
		justifyContent:'flex-start',
		alignItems:"flex-start",
		elevation:1,
		overflow:'hidden'
	},
	desc: {
		paddingVertical:RFValue(12),
		paddingHorizontal:RFValue(15)
	},
	name: {
		color:'#464646',
		fontSize:RFValue(16),
		fontWeight:'800',
		marginBottom:RFValue(6)
	},
	location: {
		color:'#9D9D9D',
		fontSize:RFValue(12),
		marginBottom:RFValue(3)
	},
	feature: {
		color:'#A5A4A3',
		fontSize:RFValue(10),
		marginBottom:RFValue(3)
	},
	price: {
		color:'#45B549',
		fontWeight:'bold',
		fontSize:RFValue(16),
	}

})

export default List;