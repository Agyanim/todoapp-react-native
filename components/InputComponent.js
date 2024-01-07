import { Button, TextInput, View, Modal, StyleSheet } from "react-native";

const InputComponent = ({
	onPressHandler,
	isModelVisible,
	setIsModelVisible,
	todo,
	setTodo
}) => {
	
	const onChangeHandler = (text) => {
		setTodo(text);
	};

	const onPressHandler2 = () => {
		if (todo) {
			onPressHandler(todo);
			setTodo("");
			setIsModelVisible(false);
		}
	};
	return (
		<Modal visible={isModelVisible} style={styles.model}>
			<View style={styles.container}>
				{/* input container */}
				<View style={styles.textInputWrapper}>
					<TextInput
						style={styles.textInput}
						placeholder="Enter todos here"
						onChangeText={onChangeHandler}
						value={todo}
					/>
					<Button title="Submit" onPress={onPressHandler2} color={"#202414"} />
				</View>
			</View>
		</Modal>
	);
};

export default InputComponent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	textInputWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
		backgroundColor:"#6a7e79",
		width:"100%"
	},
	textInput: {
		width: "70%",
		borderWidth: 1,
		borderColor: "#202414",
		borderRadius: 5,
		padding: 4,
		color:"white"
	},
	model:{
		
	}
});
