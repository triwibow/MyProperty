import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CardPopular from './component/CardPopular';
import { RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';

type Props = {
	width?:string
}

type ListPopular = {
	id:number,
	name:string,
	type:string,
	bgBadge:string,
	bgImage:number,
	price:string,
	location:string
}

const Popular = (props:Props) => {
	const { width } = props;

	const [listPopular, setListPopular] = useState<ListPopular[]>([
		{
			id:1,
			name:'Citraland Apart A03',
			type:'Apartemen',
			bgBadge:'#67C757',
			bgImage:require('../../../assets/apartement.jpg'),
			price:'Rp 300 Jt',
			location:'Sleman, Yogyakarta'
		},
		{
			id:2,
			name:'Leivara Residence',
			type:'Rumah',
			bgBadge:'#FFA740',
			bgImage:require('../../../assets/apartement.jpg'),
			price:'Rp 220 Jt',
			location:'Klaten, Yogyakarta'
		},
		{
			id:3,
			name:'Tanah Kavling',
			type:'Tanah',
			bgBadge:'#BD5AEC',
			bgImage:require('../../../assets/apartement.jpg'),
			price:'Rp 100 Jt',
			location:'Sleman, Yogyakarta'
		}
	])

	const styleLayout = StyleSheet.create({
		width: {
			width:width?width:'100%'
		}
	})

	return (
		<View style={[styles.container, styleLayout.width]}>
			<Text style={styles.title}>Property Populer</Text>
			<ScrollView 
				horizontal
				scrollEnabled
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{alignItems:'center',height:"100%"}}
				style={{ flexGrow: 1, marginBottom:20 }}
			>
				{listPopular.map(item => {
					return (
						<CardPopular 
							key={item.id}
							name={item.name}
							type={item.type}
							bgBadge={item.bgBadge}
							bgImage={item.bgImage}
							price={item.price}
							location={item.location}
						/>
					)
				})}
			</ScrollView>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		alignSelf:'center',
		paddingVertical:20
	},
	title:{
		color:'#5B5B5B',
		fontWeight:'bold',
		fontSize:RFValue(20),
		marginBottom:RFValue(17)
	}
})

export default Popular;