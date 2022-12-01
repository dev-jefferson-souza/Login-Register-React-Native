import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',

        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingTop: Platform.OS === 'ios' ? 64 : 50,

        alignItems: 'center'
    },
    topBar:{
        width: '100%',
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        marginBottom: 30
    },
    logo: {
        height: 60,
        width: 60
    },
    warningBox: {
      width: 300,
      marginTop: 8,
      flexDirection: "row",
      alignItems: "center"
    },
    list: {
        width: 300,
        paddingLeft: 30,
        fontSize: 12
    },
    termsText:{
        position:'relative',
        top: 20
    },
    textHighligth:{
        textDecorationLine: "underline",
        fontWeight: '500',
        color:'#37aeae',
    }
})