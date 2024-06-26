import { StyleSheet } from "react-native";
import { colors } from "../../Theme";

export const styles = StyleSheet.create({
    inputView: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: '3%',
    },
    labelContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    inputLabel: {
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: colors.black,
        textTransform: 'capitalize',
    },
    errorText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        textAlign: 'center',
        color: colors.red,
        marginRight: '1%',
    },
    inputContainer: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightGray,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
    },
    textInput: {
        width: '85%',
        height: '100%',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: colors.black,
    },
    iconContainer: {
        width: '10%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 24,
        height: 24,
    },
    forgotLabel: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        textAlign: 'center',
        color: colors.darkGray,
        marginTop: 5,
    },
});