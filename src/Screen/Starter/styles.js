import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',

        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingTop: Platform.OS === 'ios' ? 64 : 50,

        alignItems: 'center'
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        maxWidth: 300,
        textAlign: "center",
        fontStyle: 'italic',
        marginTop: 20,
        marginBottom: 50,
        textShadowColor: 'rgba(44, 128, 137, 0.4)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2
        
    },
    image: {
        width: 250,
        height: 250,
        position:"relative",
        marginBottom: 80
       
    },
    logo: {
        position: "absolute",
        bottom: 20,
        height: 70,
        width: 70
    }
})