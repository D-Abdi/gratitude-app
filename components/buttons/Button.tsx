import {Pressable, Text} from "react-native";
import {globalStyles} from "../../style/globalStyles";
import {useEffect, useState} from "react";

function setButtonSizeHandler(size) {
    if (size === "large") {
        return globalStyles.buttonLarge;
    } else if (size === "small") {
        return globalStyles.buttonSmall;
    } else {
        return globalStyles.buttonRegular;
    }
}

export const PrimaryButton  = ({ text, callBack = null, pressableStyle = null, textStyle = null, size = null }) => {
    const [buttonSize, setButtonSize] = useState(globalStyles.buttonRegular);

    useEffect(() => {
        setButtonSize(setButtonSizeHandler(size));
    }, [])

    return (
        <Pressable onPress={callBack} style={[globalStyles.button, globalStyles.primaryButton, pressableStyle, buttonSize]}>
            <Text style={[globalStyles.buttonText, globalStyles.primaryButtonText, textStyle]}>{text}</Text>
        </Pressable>
    )
}


export const PrimaryButtonOutline  = ({ text, callBack = null, pressableStyle = null, textStyle = null, size = null }) => {
    const [buttonSize, setButtonSize] = useState(globalStyles.buttonRegular);

    useEffect(() => {
        setButtonSize(setButtonSizeHandler(size));
    }, [])

    return (
        <Pressable onPress={callBack} style={[globalStyles.button,  globalStyles.buttonLarge,globalStyles.primaryBorder, pressableStyle, buttonSize]}>
            <Text style={[globalStyles.buttonText, globalStyles.primaryText, textStyle]}>{text}</Text>
        </Pressable>
    )
}