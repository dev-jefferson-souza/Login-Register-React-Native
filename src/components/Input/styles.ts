import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        borderRadius: 6,
        borderColor: '#37aeae',
        borderBottomWidth: 1.5,
        
        paddingLeft: 10,
        paddingRight: 50,
       
        width: 300,
        height: 28,
        alignContent:"flex-start",
        marginBottom: 24,
    },

    text: {
        fontSize: 16,
        fontWeight: "500",
        textAlignVertical:"center",
        fontStyle: 'italic',
        color: '#37aeae',
    },
    secureView: {
        width: 300,
        height: 28,
        justifyContent: "center",
        flexDirection: 'row',
    },
    eyeIcon:{
        alignSelf:'center',
        position: 'absolute',
        right: 18,
    }
})