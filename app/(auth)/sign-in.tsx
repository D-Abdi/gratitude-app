import {Text, View, StyleSheet, Pressable} from "react-native";
import { useAuth } from "../../context/auth";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SignIn() {
    const { signIn } = useAuth();

    return (
        <View style={styles.container}>
            <FontAwesome5 name="praying-hands" size={64} color="black" style={{ marginBottom: 12}} />
            <Text style={styles.logoText}>Gratitude app</Text>
            <Pressable onPress={() => signIn()} style={[styles.button, styles.signInButton]}>
                <Text style={[styles.buttonText, styles.signInButtonText]}>Sign In</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.signUpButton]}>
                <Text style={[styles.buttonText, styles.signUpButtonText]}>Sign In</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
    signInButton: {
        backgroundColor: "#757575",
        borderColor: "#757575",
        marginBottom: 24
    },
    signInButtonText: {
        color: "#fff"
    },
    signUpButton: {
        borderColor: "#757575",
    },
    signUpButtonText: {
        color: "#757575"
    }
})