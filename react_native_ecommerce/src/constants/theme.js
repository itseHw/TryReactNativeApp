import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const theme = {
    colors:{
        black: "black",
        white: "white",
        red: "red",
        grey: "grey",
        yellow: "yellow",
        green: "green",
        softblue: "#AACEDB",
        lavender: "#E6E6FA",
        lightWhite: "#FAFAFC"
    },
    sizes:{
        xSmall: 10,
        small: 13,
        medium: 16,
        large: 21,
        xLarge: 25,
        xxLarge: 35,
        size100: 100,
        width,
        height
    },
    fontWeight:{
        bold: "bold",
    }

}