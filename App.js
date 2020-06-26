import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import History from './components/History'

export default function App() {
	//console.log('running')
	return (
		<Provider store={createStore(reducer)}>
			<View style={{ flex: 1 }}>
			<History />
			</View>
		</Provider>
	);
}
