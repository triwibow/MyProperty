import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectLocation = () => {
	const [label, setLabel] = useState<string>('Lokasi Kamu');
	const [selectedValue, setSelectedValue] = useState<string>();
	const countries = ["Pasar Kembang", "Ndoli", "Ngebong", "Holly Wings"]

	return (
		<View style={styles.container}>
			<SelectDropdown
				data={countries}
				onSelect={(selectedItem, index) => {
					setLabel('Lokasi Kamu')
					setSelectedValue(selectedItem);
				}}
				defaultButtonText={label}
				buttonTextAfterSelection={(selectedItem, index) => {
					return label;
				}}
				rowTextForSelection={(item, index) => {
					return item;
				}}
				renderDropdownIcon={isOpened => {
					return <Icon name={'chevron-down'} color={'#FFF'} size={12}  />;
				}}
				buttonStyle={styles.dropdown1BtnStyle}
				buttonTextStyle={styles.dropdown1BtnTxtStyle}
				
				dropdownIconPosition={'right'}
				dropdownStyle={styles.dropdown1DropdownStyle}
				rowStyle={styles.dropdown1RowStyle}
				rowTextStyle={styles.dropdown1RowTxtStyle}
			/>
			{selectedValue && (
				<Text style={styles.selectedText}>{selectedValue}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flexDirection:'column',
		alignItems:'flex-start'
	},
	picker: {
		color:'#FFF'
	},
	selectedText: {
		fontSize:RFValue(16),
		color: '#FFF',
		marginLeft:RFValue(6)
	},
	dropdown1BtnStyle: {
    width: '70%',
    backgroundColor: 'transparent',
		height:'auto'
  },
  dropdown1BtnTxtStyle: {color: '#FFF', textAlign: 'left',marginLeft:0, fontSize:RFValue(14)},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
})

export default SelectLocation;