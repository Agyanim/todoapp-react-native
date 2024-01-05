import { Button, TextInput, View, Modal } from "react-native";
import { styles } from "../styles";
import { useState } from "react";

const InputComponent = ({ onPressHandler }) => {
	const [todo, setTodo] = useState("");
	const onChangeHandler = (text) => {
		setTodo(text);
	};

	const onPressHandler2 = () => {
		onPressHandler(todo);
		setTodo("");
	};
	return (
		<Modal >
			<View style={styles.container}>
				{/* input container */}
				<View style={styles.textInputWrapper}>
					<TextInput
						style={styles.todoText}
						placeholder="Enter todos here"
						onChangeText={onChangeHandler}
						value={todo}
					/>
					<Button title="Submit" onPress={onPressHandler2} />
				</View>
			</View>
		</Modal>
	);
};

export default InputComponent;
