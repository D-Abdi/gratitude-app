import {Text, View} from "react-native";
import { useAuth } from "../../context/auth";
import { FontAwesome5 } from '@expo/vector-icons';
import {globalStyles} from "../../style/globalStyles";
import {PrimaryButton, PrimaryButtonOutline_LG } from "../../components/buttons/Button";

export default function SignIn() {
    const { signIn } = useAuth();

    return (
        <View style={globalStyles.containerFlexCenter}>
            <FontAwesome5 name="praying-hands" size={64} color="black" style={[{ marginBottom: 12}, globalStyles.logoIcon]} />
            <Text style={globalStyles.logoText}>Gratitude app</Text>
            <PrimaryButton text={"Sign in"} callBack={() => signIn()} pressableStyle={{marginBottom: 24}} size={"large"} />
            <PrimaryButtonOutline_LG text={"Sign up"} callBack={() => signIn()} />
        </View>
    )
}