import {Tabs} from 'expo-router';
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import {Provider} from "../context/auth";


export default function Layout() {
    return (
        <Provider>
            <Tabs>
                <Tabs.Screen name="Journal" options={{ tabBarLabel: "Journal", href: "/Journal",
                    tabBarIcon: () => (
                        <Ionicons name="ios-journal-outline" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="DailyZen" options={{ tabBarLabel: "Daily zen", href: "/daily-zen",
                    tabBarIcon: () => (
                        <Ionicons name="ios-happy-outline" size={24} color="black" />
                        )
                    }}
                />
                <Tabs.Screen name="Calendar" options={{ tabBarLabel: "Calendar", href: "/calendar",
                    tabBarIcon: () => (
                        <Ionicons name="ios-calendar-outline" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="Timeline" options={{ tabBarLabel: "Timeline", href: "/timeline",
                    tabBarIcon: () => (
                        <MaterialIcons name="timeline" size={24} color="black" />
                    )
                }} />
            </Tabs>
        </Provider>
    );
}