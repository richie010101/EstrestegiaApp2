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
        marginTop:-15,
        height:60,
        width:200,
    },
    logo:{ 
        marginTop:'10%',
        alignItems:'center',
    },
})