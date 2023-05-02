import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import SelectLocation from './SelectLocation';
import Search from './Search';

type Props = {
	mb?:number
}

const AppBar = (props:Props) => {
	const { mb } = props;

	const styleLayout = StyleSheet.create({
		mb: {
			marginBottom: mb? RFValue(mb):0
		}
	});

	return (		
		<View style={[styles.container, styleLayout.mb]}>
			<View style={styles.selectLocWrapper}>
				<Image 
					source={require('../../../assets/loc.png')}
					style={{marginRight:10}}
				/>
				<View style={styles.styleLoc}>
					<SelectLocation />
				</View>
			</View>
			<View>
				<Search />
			</View>
		</View>	
		
	);
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	},
	selectLocWrapper: {
		flexDirection:'row',
		alignItems:'center'
	},
	styleLoc: {
		flexBasis:'50%'
	}
});


export default AppBar;