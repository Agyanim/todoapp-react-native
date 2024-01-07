import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, backColor, onPress }) => {
	return (
		<View>
			<Pressable
				android_ripple={{ color: "green" }}
				onPress={onPress}
				style={{ backgroundColor: backColor, borderRadius: 5 }}
			>
				<Text style={styles.buttonText}>{children.toUpperCase()}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonText: {
		color: "white",
		paddingHorizontal: 15,
		paddingVertical: 10,
		fontWeight: "bold",
	},
	
});
