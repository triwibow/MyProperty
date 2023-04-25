import { SafeAreaView, StyleSheet } from "react-native";

const Container = (props:any) => {
	return (
		<SafeAreaView style={styles.container}>
			{props.children}
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:"#FFF"
	}
})

export default Container;