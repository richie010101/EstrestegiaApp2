import { StyleSheet,Platform } from "react-native";

export default StyleSheet.create({
    androidSafeArea:{
        flex:1,
        paddingTop: Platform.OS === "android" ? 35:0,
        backgroundColor:"white",
    },
    screen:{
            alignContent:'center',
            alignItems:'center',
            height:"100%",
            width:"100%",
    },
    logo2:{
        height:"100%",
        width:"100%",
    },
    logo:{ 
        marginTop:'4%',
        marginBottom:"5%",
        alignItems:'center',
        width:"48.5%",
        height:"7%",
    },
    logo3:{
        alignItems:'center',
        marginTop:"2%",
        height:"5%",
        width:"30%",
    },
})