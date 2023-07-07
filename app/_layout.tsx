import {Tabs} from 'expo-router';
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import {Provider} from "../context/auth";
import HeaderTitle from "../Components/HeaderTitle";

export default function Layout() {
    return (
        <Provider>
            <Tabs>
                <Tabs.Screen name="Journal" options={{ tabBarLabel: "Journal", href: "/Journal",
                    headerTitle: () => <HeaderTitle title={"Journal"}></HeaderTitle>,
                    tabBarIcon: () => (
                        <Ionicons name="ios-journal-outline" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="DailyZen" options={{ tabBarLabel: "Daily zen", href: "/DailyZen",
                    headerTitle: () => <HeaderTitle title={"Daily Zen"}></HeaderTitle>,
                    tabBarIcon: () => (
                        <Ionicons name="ios-happy-outline" size={24} color="black" />
                        )
                    }}
                />
                <Tabs.Screen name="Calendar" options={{ tabBarLabel: "Calendar", href: "/Calendar",
                    headerTitle: () => <HeaderTitle title={"Calendar"}></HeaderTitle>,
                    tabBarIcon: () => (
                        <Ionicons name="ios-calendar-outline" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="Timeline" options={{ tabBarLabel: "Timeline", href: "/Timeline",
                    headerTitle: () => <HeaderTitle title={"Timeline"}></HeaderTitle>,
                    tabBarIcon: () => (
                        <MaterialIcons name="timeline" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="(auth)/sign-in" options={{
                        // This tab will no longer show up in the tab bar.
                        href: null,
                    }}
                />
            </Tabs>
        </Provider>
    );
}