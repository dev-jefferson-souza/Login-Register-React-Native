import { StyleSheet, Platform } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',

        backgroundColor: '#f7f7f7',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 64 : 50,
    },
    title: {
        fontSize: 32,
      
        marginBottom: 80,
        fontWeight: '700'
    },
    pieContainer: {
        flexDirection: "row",
        width: '100%',
        height: 210,

        borderColor: '#f0f0f0',
        borderWidth: 1.2,
        borderRadius: 6,
        
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingTop: 100,
        paddingBottom: 70,

        alignItems:"center",
        alignSelf:"center",
    },
    pieName:{
        position:"absolute",
        backgroundColor: '#2c8089',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        color:'#f7f7f7',
        top: 8,
        left: 8,
        fontSize: 14,
        fontWeight: '800',
    }
})