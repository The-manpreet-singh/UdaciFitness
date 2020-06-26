import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	//console.log('running')
	return (
		<View style={styles.container}>
			<Text>Hello World app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
