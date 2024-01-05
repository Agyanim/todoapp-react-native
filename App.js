import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	Text,
	View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import InputComponent from "./components/InputComponent";

export default function App() {
	const [todoList, setTodoList] = useState([]);
	const onPressHandler = (todo) => {
		todo ? setTodoList((todoList) => [...todoList, todo]) : "";
	};
	const onEdit = () => {
		console.log("edit");
	};
	const onDelete = () => {
		console.log("delete");
	};

	const renderFatList = (
		<FlatList
			data={todoList}
			renderItem={(itemData) => {
				return (
					<View style={styles.todoList}>
						<Text style={{ width: "64%" }}>{itemData.item}</Text>
						<PrimaryButton onPress={onEdit} backColor={"blue"}>
							Edit
						</PrimaryButton>
						<PrimaryButton onPress={onDelete} backColor={"red"}>
							Del
						</PrimaryButton>
					</View>
				);
			}}
		/>
	);
	// const renderTodos = todoList?.map((todo, id) => {
	// 	return (
	// 	<ScrollView  key={id}>
	//   <View  style={styles.todoList}>
	//     <Text style={{width:"70%"}}>{todo}</Text>
	//     <Button title="Del"/>
	//     <Button  title="Edit"/>
	//   </View>
	// 	</ScrollView>
	// );
	// });

	return (
		// main container
		<>
			<InputComponent onPressHandler={onPressHandler} />
			<View style={styles.displayText}>{renderFatList}</View>
			<StatusBar style="auto" />
		</>
	);
}
