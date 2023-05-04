import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import ButtonIcon from '../../../components/button/ButtonIcon';
import { useState } from 'react';
import TextButton from '../../../components/button/TextButton';
import BadgeHorizontal from '../../../components/badge/BadgeHorizontal';
import CardNearest from './component/CardNearest';

type Props = {
	width?:string
}

type ListButton = {
	id:number,
	text:string,
	bgColor:string,
	icon:number,
	iconActive:number,
	iconNonActive:number,
	borderColor:string,
	textColor:string,
	px:number
}

type ListNearest = {
	id:number,
	price:string,
	location:string,
	type:string,
	bgImage:number
}

const Nearest = (props:Props) => {
	const { width } = props;
	const [listButton, setListButton] = useState<ListButton[]>([
		{
			id:1,
			text:'Rumah',
			bgColor:'transparent',
			borderColor:'#49B548',
			textColor:'#49B548',
			px:10,
			icon:require('../../../assets/homeGreen.png'),
			iconActive:require('../../../assets/homeGreen.png'),
			iconNonActive:require('../../../assets/homeGrey.png'),
		},
		{
			id:2,
			text:'Apartment',
			bgColor:'transparent',
			borderColor:'transparent',
			textColor:'#A5A4A3',
			px:0,
			icon:require('../../../assets/homeGrey.png'),
			iconActive:require('../../../assets/homeGreen.png'),
			iconNonActive:require('../../../assets/homeGrey.png'),
		},
		{
			id:3,
			text:'Tanah',
			bgColor:'transparent',
			borderColor:'transparent',
			textColor:'#A5A4A3',
			px:0,
			icon:require('../../../assets/mapGrey.png'),
			iconActive:require('../../../assets/homeGreen.png'),
			iconNonActive:require('../../../assets/mapGrey.png'),
		}
	]);

	const [listNearest, setListNearest] = useState<ListNearest[]>([
		{
			id:1,
			type:'Rumah',
			price:'Rp. 175 jt',
			location:'Giwangan, Yogyakarta',
			bgImage:require('../../../assets/apartement.jpg')
		},
		{
			id:2,
			type:'Apartment',
			price:'Rp. 220 jt',
			location:'Giwangan, Yogyakarta',
			bgImage:require('../../../assets/apartement.jpg')
		},
		{
			id:3,
			type:'Rumah',
			price:'Rp. 725 jt',
			location:'Giwangan, Yogyakarta',
			bgImage:require('../../../assets/apartement.jpg')
		}
	])

	const styleLayout = StyleSheet.create({
		width:{
			width: width? width:'100%'
		}
	});

	const handleClick = (id:number) => {
		setListButton(
			listButton.map(item => {
				if(item.id == id){
					return {
						...item,
						bgColor:'transparent',
						borderColor:'#49B548',
						textColor:'#49B548',
						px:10,
						icon:item.iconActive
					}
				}
				
				return {
					...item,
					bgColor:'transparent',
					borderColor:'transparent',
					textColor:'#A5A4A3',
					px:10,
					icon:item.iconNonActive
				}
			})
		)
	}

	return (
		<View style={[styles.container, styleLayout.width]}>
			<Card style={styles.card}>
				<Card.Content style={styles.cardContent}>
					<ScrollView 
						horizontal
						scrollEnabled
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.contentContainerFlatListStyle}
						style={{ flexGrow: 1, marginBottom:20 }}
					>
						{listButton.map(item => {
							return (
								<ButtonIcon 
									key={item.id}
									text={item.text}
									bgColor={item.bgColor}
									icon={item.icon}
									loading={false}
									onPress={() => handleClick(item.id)}
									borderColor={item.borderColor}
									textColor={item.textColor}
									px={item.px}
								/>
							)
						})}
					</ScrollView>
					<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
						<Text style={styles.title}>Terdekat</Text>
						<TextButton
							fontSize={12}
							color="#49B548"
							fw={'400'}
						>
							Lihat Semua
						</TextButton>
					</View>

					<View style={styles.nearest}>
						{listNearest.map(item => {
							return (
								<CardNearest 
									key={item.id}
									price={item.price}
									location={item.location}
									type={item.type}
									bgImage={item.bgImage}
								/>
							)
						})}
					</View>
				</Card.Content>
			</Card>
		</View>
	)
};


const styles = StyleSheet.create({
	container: {
		alignSelf:'center',
		marginTop:RFValue(-65)
	},
	card: {
		backgroundColor:'#FFF',
		borderRadius:19
	},
	cardContent: {
		paddingVertical:RFValue(20),
		paddingHorizontal:RFValue(20)
	},
	contentContainerFlatListStyle: {
		alignItems: "center",
		height: "100%",
	},
	title: {
		color:'#5B5B5B',
		fontSize:RFValue(16),
		fontWeight:'700'
	},
	nearest: {
		flexDirection:'row',
		flex:1,
		padding:0,
		justifyContent:'space-between'
	}
})

export default Nearest;