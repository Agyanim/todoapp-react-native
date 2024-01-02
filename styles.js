import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems:"center"
	},
	textInputWrapper: {
    flex:1,
		marginTop: 50,
		flexDirection: "row",
		justifyContent: "center",
    alignItems:"center",
		gap: 5,
	},
	todoText: {
		width: "70%",
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 5,
    padding: 4
	},
  displayText:{
    flex:6,
    borderTopWidth:1,
    width:"90%",
    padding:5
  },
  todoList:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    marginBottom:5,
    borderWidth:1,
    paddingLeft:5,
    
  }
});
