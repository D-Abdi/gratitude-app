import { Tabs } from 'expo-router';
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="DailyZen" options={{ tabBarLabel: "Daily zen",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="ios-happy-outline" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen name="Journal" options={{ tabBarLabel: "Journal",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="ios-journal-outline" size={24} color="black" />
                )
            }} />
            <Tabs.Screen name="Calendar" options={{ tabBarLabel: "Calendar",
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="ios-calendar-outline" size={24} color="black" />
                )
            }} />
            <Tabs.Screen name="Timeline" options={{ tabBarLabel: "Timeline",
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="timeline" size={24} color="black" />
                )
            }} />
        </Tabs>
    );
}