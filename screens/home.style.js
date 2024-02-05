import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";


const styles = StyleSheet.create({ 
    textstyle:{
        fontFamily: "bold",
        fontSize: 40,
    },

    appBarWrapper:{
        marginHorizontal:22,
        marginTop: SIZES.small
    },

    appBar:{
        fontSize: 40,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    location: {
        fontFamily: "semiBold",
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },

    cartCount:{
        position: 'absolute',
        bottom: 16,
        weidt: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999,
    },

    cartNumber: {
        fontFamily:'regular',
        fontWeight: '600',
        fontSize: 10,
        color: COLORS.lightWhite
    }
});


export default styles