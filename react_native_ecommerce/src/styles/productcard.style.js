import { theme } from "../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    flex:1,
    // alignItems: "center",
    height: 270,
    // width: 400,
    overflow: 'hidden',
    margin:10,
    aspectRatio: 1, //Makes the container a square
    backgroundColor: theme.colors.lavender
  },
  image:{
    width: "70%",
    height: "70%",
  },
  details:{
    padding: theme.sizes.small
  },
  title: {
    fontSize: theme.sizes.medium,
    fontWeight: theme.fontWeight.bold, 
  },
  price: {
    marginBottom:10,
  }
});

export default styles;