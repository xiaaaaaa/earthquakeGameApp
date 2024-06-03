import React, { useState } from "react";
import { StyleSheet, Keyboard, View } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// 開始對話
import TalkS_1Screen from "../screen/StartTalk/TalkS_1Screen";
import TalkS_2Screen from "../screen/StartTalk/TalkS_2Screen";

// 第一關
import Talk1_1Screen from "../screen/Level1/Talk1_1Screen";
import Talk1_2Screen from "../screen/Level1/Talk1_2Screen";
import Talk1_3Screen from "../screen/Level1/Talk1_3Screen";
import Talk1_4Screen from "../screen/Level1/Talk1_4Screen";
import Puzzle1Screen from "../screen/Level1/Puzzle1Screen";
import Option1Screen from "../screen/Level1/Option1Screen";
import RightCG1Screen from "../screen/Level1/RightCG1Screen";
import WrongCG1Screen from "../screen/Level1/WrongCG1Screen";

// 第二關
import Talk2_1Screen from "../screen/Level2/Talk2_1Screen";
import Puzzle2Screen from "../screen/Level2/Puzzle2Screen";
import Option2Screen from "../screen/Level2/Option2Screen";
import RightCG2Screen from "../screen/Level2/RightCG2Screen";
import WrongCG2Screen from "../screen/Level2/WrongCG2Screen";

// 第三關

// 第四關

// 結束對話

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NativeBaseProvider>
            <NavigationContainer independent={true} >
                <HomeStack />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="TalkS_1Screen"
                component={TalkS_1Screen}
            />
            <Stack.Screen
                name="TalkS_2Screen"
                component={TalkS_2Screen}
            />
            <Stack.Screen
                name="Talk1_1Screen"
                component={Talk1_1Screen}
            />
            <Stack.Screen
                name="Talk1_2Screen"
                component={Talk1_2Screen}
            />
            <Stack.Screen
                name="Talk1_3Screen"
                component={Talk1_3Screen}
            />
            <Stack.Screen
                name="Talk1_4Screen"
                component={Talk1_4Screen}
            />
            <Stack.Screen
                name="Puzzle1Screen"
                component={Puzzle1Screen}
            />
            <Stack.Screen
                name="Option1Screen"
                component={Option1Screen}
            />
            <Stack.Screen
                name="RightCG1Screen"
                component={RightCG1Screen}
            />
            <Stack.Screen
                name="WrongCG1Screen"
                component={WrongCG1Screen}
            />

            <Stack.Screen
                name="Talk2_1Screen"
                component={Talk2_1Screen}
            />
            <Stack.Screen
                name="Puzzle2Screen"
                component={Puzzle2Screen}
            />
            <Stack.Screen
                name="Option2Screen"
                component={Option2Screen}
            />
            <Stack.Screen
                name="RightCG2Screen"
                component={RightCG2Screen}
            />
            <Stack.Screen
                name="WrongCG2Screen"
                component={WrongCG2Screen}
            />


        </Stack.Navigator>
    );
}

export default Navigation;