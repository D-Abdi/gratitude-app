import { StyleSheet } from 'react-native';

const colors = {
    primary: "#757575",
    secondary: "#757575",
    success: "#4caf50",
    danger: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
    light: "#f5f5f5",
    dark: "#212121",
    primaryButtonText: "#ffffff",
    secondaryButtonText: "#ffffff",
    successButtonText: "#ffffff",
    dangerButtonText: "#ffffff",
    warningButtonText: "#ffffff",
    infoButtonText: "#ffffff",
    lightButtonText: "#212121",
    darkButtonText: "#ffffff",
}

export const globalStyles = StyleSheet.create({
    containerFlexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 124
    },
    button: {
        borderWidth: 2,
        borderStyle: "solid",
        paddingHorizontal: 96,
        paddingVertical: 16,
        borderRadius: 12,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    primaryBorder: {
        borderColor: colors.primary,
    },
    primaryBackground: {
        backgroundColor: colors.primary,
    },
    primaryText: {
        color: colors.primary,
    },
    primaryButton: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
    },
    primaryButtonText: {
        color: colors.primaryButtonText,
    }

});