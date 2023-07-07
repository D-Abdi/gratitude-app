import { Text, View } from "react-native";
import { useAuth } from "../../context/auth";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SignIn() {
    const { signIn } = useAuth();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="praying-hands" size={64} color="black" style={{ marginBottom: 12}} />
            <Text style={{ fontSize: 48, fontWeight: "bold", marginBottom: 124 }}>Gratitude app</Text>
            <Text onPress={() => signIn()}
                style={{ fontSize: 24, fontWeight: "bold", color: "white", backgroundColor: "#757575", borderStyle: "solid", borderWidth: 2, borderColor: "#757575", paddingHorizontal: 96, paddingVertical: 16, borderRadius: 12, marginBottom: 24 }}
            >Sign In</Text>
            <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "#757575", borderStyle: "solid", borderWidth: 2, borderColor: "#757575", paddingHorizontal: 96, paddingVertical: 16, borderRadius: 12 }}
            >Sign up</Text>
        </View>
    )
}