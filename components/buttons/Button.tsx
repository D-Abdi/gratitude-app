import {Pressable, Text} from "react-native";
import {globalStyles} from "../../style/globalStyles";

export const PrimaryButton_LG  = ({ text, callBack = null, pressableStyle = null, textStyle = null }) => {
    return (
        <Pressable onPress={callBack} style={[globalStyles.button, globalStyles.primaryButton, pressableStyle]}>
            <Text style={[globalStyles.buttonText, globalStyles.primaryButtonText, textStyle]}>{text}</Text>
        </Pressable>
    )
}

export const PrimaryButtonOutline_LG  = ({ text, callBack = null, pressableStyle = null, textStyle = null }) => {
    return (
        <Pressable style={[globalStyles.button, globalStyles.primaryBorder, pressableStyle]}>
            <Text style={[globalStyles.buttonText, globalStyles.primaryText, textStyle]}>Sign In</Text>
        </Pressable>
    )
}