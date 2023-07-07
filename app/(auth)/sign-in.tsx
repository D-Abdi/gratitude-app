import {Text, View, Pressable} from "react-native";
import { useAuth } from "../../context/auth";
import { FontAwesome5 } from '@expo/vector-icons';
import {globalStyles} from "../../style/globalStyles";

export default function SignIn() {
    const { signIn } = useAuth();

    return (
        <View style={globalStyles.containerFlexCenter}>
            <FontAwesome5 name="praying-hands" size={64} color="black" style={{ marginBottom: 12}} />
            <Text style={globalStyles.logoText}>Gratitude app</Text>
            <Pressable onPress={() => signIn()} style={[globalStyles.button, globalStyles.primaryButton]}>
                <Text style={[globalStyles.buttonText, globalStyles.primaryButtonText]}>Sign In</Text>
            </Pressable>
            <Pressable style={[globalStyles.button, globalStyles.primaryBorder]}>
                <Text style={[globalStyles.buttonText, globalStyles.primaryText]}>Sign In</Text>
            </Pressable>
        </View>
    )
}