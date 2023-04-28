import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
	mt?: number,
	mb?: number,
	children: ReactNode
}

const FormControl = (props:Props) => {
	const { mt, mb } = props;

	const styles = StyleSheet.create({
		container: {
			marginTop:RFValue(mt? mt: 0),
			marginBottom:RFValue(mb? mb: 0)
		}
	})
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	);
} 

export default FormControl;