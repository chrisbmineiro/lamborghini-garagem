import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container: {
        padding: 10,
        backgroundColor: '#01A6B3',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    button: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    buttonIcon: {
        color: '#fff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 6,
    }
});