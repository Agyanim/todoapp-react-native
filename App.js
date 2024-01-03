import { StatusBar } from "expo-status-bar";
import {
	Button,
	FlatList,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";

export default function App() {
	const [todo, SetTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const onChangeHandler = (text) => {
		SetTodo(text);
	};
	const onPressHandler = () => {
		todo ? setTodoList((todoList) => [...todoList, todo]) : "";
		SetTodo("");
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
		<View style={styles.container}>
			{/* input container */}
			<View style={styles.textInputWrapper}>
				<TextInput
					style={styles.todoText}
					placeholder="Enter todos here"
					onChangeText={onChangeHandler}
					value={todo}
				/>
				<Button title="Submit" onPress={onPressHandler} />
			</View>
			<View style={styles.displayText}>{renderFatList}</View>
			<StatusBar style="auto" />
		</View>
	);
}
