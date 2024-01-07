import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, FlatList, Text, View } from "react-native";
import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import InputComponent from "./components/InputComponent";

export default function App() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState("");
	const [editTodo, setEditTodo] = useState(false);
	const [findTodo, setFindTodo] = useState({});

	const onPressHandler = (todo) => {
		if (editTodo) {
			if (todo) {
				setTodoList((todoList) => [...todoList, { id: findTodo.id, todo }]);
				setEditTodo(false);
			}
		} else {
			todo
				? setTodoList((todoList) => [
						...todoList,
						{ id: new Date().getMilliseconds(), todo },
				  ])
				: "";
		}
	};
	const [isModelVisible, setIsModelVisible] = useState(false);

	const onEdit = (id) => {
		const findTodo = todoList.find((todo) => todo.id === id);
		setTodoList(() => todoList.filter((todo) => todo.id != id));
		if (findTodo) {
			setEditTodo(true);
			setIsModelVisible(true);
			setFindTodo(findTodo);
			setTodo(findTodo.todo);
		}
	};

	// console.log(findTodo);
	const onDelete = (id) => {
		setTodoList(() => todoList.filter((todo) => todo.id != id));
	};

	const renderFatList = (
		<FlatList
			data={todoList}
			renderItem={(itemData) => {
				return (
					<View style={styles.todoList}>
						<View style={styles.textContainer}>
						<Text style={styles.inputText}>{itemData.item.todo}</Text>
						</View>
						<View style={styles.todoListButtonContainer}>
						<PrimaryButton
							onPress={onEdit.bind(this, itemData.item.id)}
							backColor={"#202414"}
						>
							Edit
						</PrimaryButton>
						<PrimaryButton
							onPress={onDelete.bind(this, itemData.item.id)}
							backColor={"red"}
						>
							Del
						</PrimaryButton>
						</View>
					</View>
				);
			}}
		/>
	);

	return (
		// main container
		<>
			<View style={styles.addTodoButtonContainer}>
				<Button onPress={() => setIsModelVisible(true)} title="Add todo" color={"#202414"} />
			</View>

			<InputComponent
				onPressHandler={onPressHandler}
				isModelVisible={isModelVisible}
				setIsModelVisible={setIsModelVisible}
				todo={todo}
				setTodo={setTodo}
			/>
			<View style={styles.displayTextArea}>{renderFatList}</View>
			<StatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	todoList: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		marginBottom: 5,
		paddingLeft: 5,
	},

	addTodoButtonContainer: {
		marginTop: 100,
		marginBottom: 20,
	},
	displayTextArea:{
		flex:6,
		backgroundColor:"#3a4e30",
		paddingTop:10
		
		
	  },

	textContainer:{
		width:"67%",
		paddingVertical:8,
		paddingHorizontal:5,
		backgroundColor:"#221202",
		elevation:5,
		borderRadius:5
	},
	inputText:{
		color:"white"
	},
	todoListButtonContainer:{
		flexDirection:"row",
		gap:5,

	},
	appBackgroundColor:{
	}
	
});
