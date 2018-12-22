import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 4,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center'
    },

    displayText: {
        color: '#3498db',
        fontSize: 50,
        textAlign: 'right',
        paddingTop: 5,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20
    },

    displayHistoric: {
        color: '#3498db',
        textAlign: 'right',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingRight: 20
    },

    inputContainer: {
        flex: 6,
        backgroundColor: 'white'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#ecf0f1'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'normal',
        color: '#636e72'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;