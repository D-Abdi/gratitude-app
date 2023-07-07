import {Text, View} from "react-native";
import {useEffect, useState} from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HeaderTitle({ title }) {
    const [date, setDate] = useState(null);

    useEffect(() => {
        const today = new Date();
        // Get today in the format: dd/mm/yyyy
        const todayFormatted = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        setDate(todayFormatted);
    }, [])

    return (
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignSelf: "center", width: "100%"}}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", width: "33.33%"}}>
                <Ionicons name="ios-person-circle-outline" size={36} color="black" style={{marginRight: 5}} />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
            </View>
            <View style={{ width: "33.33%", display: "flex", justifyContent: "center"}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{date}</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", maxWidth: "33.33%"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", marginRight: 10}}>
                    <Text style={{ fontSize: 21, fontWeight: 'bold', marginRight: 5 }}>6</Text>
                    <SimpleLineIcons name="fire" size={28} color="black" />
                </View>
                <Ionicons name="ios-notifications-outline" size={28} color="black" />
            </View>
        </View>
    );
}