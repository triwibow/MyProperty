import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppBar from './component/AppBar';
import MainCard from './component/MainCard';
import List from './component/List';
import { RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';

type Feature = {
	id:number,
	icon:number,
	desc:string
}

type List = {
	id:number,
	name:string,
	location:string,
	price:string,
	feature: Feature[],
	type:string,
	image:number
}

const Nearest = (props:any) => {
	const { navigation } = props;
	const onBackPress = () => {
		navigation.navigate('dashboard')
	}

	const [list, setList] = useState<List[]>([
		{
			id:1,
			name:'Citraland Home A03',
			location:'Sleman, Yogyakarta',
			type:'Rumah',
			image:require('../../assets/omah.jpg'),
			feature:[
				{
					id:1,
					icon:require('../../assets/kasur.png'),
					desc:'2 Kamar Tidur '
				},
				{
					id:2,
					icon:require('../../assets/km.png'),
					desc:'2 Kamar Mandi '
				}
			],
			price:'Rp 220 Jt'
		},
		{
			id:2,
			name:'Citragarden Yogya',
			location:'Bantul, Yogyakarta',
			type:'Rumah',
			image:require('../../assets/omah.jpg'),
			feature:[
				{
					id:1,
					icon:require('../../assets/kasur.png'),
					desc:'4 Kamar Tidur '
				},
				{
					id:2,
					icon:require('../../assets/km.png'),
					desc:'2 Kamar Mandi '
				}
			],
			price:'Rp 720 Jt'
		},
		{
			id:3,
			name:'Hometown Hayyat',
			location:'Sleman, Yogyakarta',
			type:'Rumah',
			image:require('../../assets/omah.jpg'),
			feature:[
				{
					id:1,
					icon:require('../../assets/kasur.png'),
					desc:'3 Kamar Tidur '
				},
				{
					id:2,
					icon:require('../../assets/km.png'),
					desc:'2 Kamar Mandi '
				}
			],
			price:'Rp 720 Jt'
		}
	]);

	const renderItem = (item:List) => {
		return (
			<List 
				key={item.id}
				name={item.name}
				price={item.price}
				location={item.location}
				image={item.image}
				type={item.type}
				feature={item.feature}
			/>
		)
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.content}>
				<AppBar 
					onBackPress={onBackPress} 
				/>
				<MainCard />
				<Text style={styles.nearestText}>Terdekat Lainnya</Text>
				
				{list.map(item => {
					return renderItem(item);
				})}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	content:{
		width:'90%',
		alignSelf:'center'
	},
	nearestText: {
		color:'#5B5B5B',
		fontSize:RFValue(18),
		fontWeight:"bold",
		marginBottom:RFValue(18)
	}
})

export default Nearest;