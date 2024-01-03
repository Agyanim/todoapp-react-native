import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const PrimaryButton = ({ children, backColor, onPress ,}) => {
	return (
		<View style={{ backgroundColor: backColor, borderRadius: 5 }}>
            
			<Pressable
				android_ripple={{ color: "green"}}
				onPress={onPress}
				style={{ backgroundColor: backColor }}
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
