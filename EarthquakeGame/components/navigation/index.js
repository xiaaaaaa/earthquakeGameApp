import React, { useState } from "react";
import { StyleSheet, Keyboard, View } from "react-native";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// 開始對話
import CoverScreen from "../screen/StartTalk/CoverScreen";
import TalkS_1Screen from "../screen/StartTalk/TalkS_1Screen";
import TalkS_2Screen from "../screen/StartTalk/TalkS_2Screen";
import TalkS_3Screen from "../screen/StartTalk/TalkS_3Screen";
import TalkS_4Screen from "../screen/StartTalk/TalkS_4Screen";
import TalkS_5Screen from "../screen/StartTalk/TalkS_5Screen";
import TalkS_6Screen from "../screen/StartTalk/TalkS_6Screen";
import TalkS_7Screen from "../screen/StartTalk/TalkS_7Screen";
import TalkS_8Screen from "../screen/StartTalk/TalkS_8Screen";

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
import Talk2_2Screen from "../screen/Level2/Talk2_2Screen";
import Talk2_3Screen from "../screen/Level2/Talk2_3Screen";
import Puzzle2Screen from "../screen/Level2/Puzzle2Screen";
import Option2Screen from "../screen/Level2/Option2Screen";
import RightCG2_1Screen from "../screen/Level2/RightCG2_1Screen";
import RightCG2_2Screen from "../screen/Level2/RightCG2_2Screen";
import WrongCG2Screen from "../screen/Level2/WrongCG2Screen";

// 第三關
import Talk3_1Screen from "../screen/Level3/Talk3_1Screen";
import Puzzle3Screen from "../screen/Level3/Puzzle3Screen";
import Option3Screen from "../screen/Level3/Option3Screen";
import RightCG3Screen from "../screen/Level3/RightCG3Screen";
import WrongCG3Screen from "../screen/Level3/WrongCG3Screen";

// 第四關
import Talk4_1Screen from "../screen/Level4/Talk4_1Screen";
import Talk4_2Screen from "../screen/Level4/Talk4_2Screen";
import Talk4_3Screen from "../screen/Level4/Talk4_3Screen";
import Talk4_4Screen from "../screen/Level4/Talk4_4Screen";
import Puzzle4Screen from "../screen/Level4/Puzzle4Screen";
import Option4Screen from "../screen/Level4/Option4Screen";
import RightCG4Screen from "../screen/Level4/RightCG4Screen";
import WrongCG4Screen from "../screen/Level4/WrongCG4Screen";

// 結束對話
import TalkE_1Screen from "../screen/EndTalk/TalkE_1Screen";
import TalkE_2Screen from "../screen/EndTalk/TalkE_2Screen";
import TalkE_3Screen from "../screen/EndTalk/TalkE_3Screen";

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
            initialRouteName="CoverScreen"
            screenOptions={{
                headerShown: false
            }}
        >
             <Stack.Screen
                name="CoverScreen"
                component={CoverScreen}
            />
            <Stack.Screen
                name="TalkS_1Screen"
                component={TalkS_1Screen}
            />
            <Stack.Screen
                name="TalkS_2Screen"
                component={TalkS_2Screen}
            />
            <Stack.Screen
                name="TalkS_3Screen"
                component={TalkS_3Screen}
            />
            <Stack.Screen
                name="TalkS_4Screen"
                component={TalkS_4Screen}
            />
            <Stack.Screen
                name="TalkS_5Screen"
                component={TalkS_5Screen}
            />
            <Stack.Screen
                name="TalkS_6Screen"
                component={TalkS_6Screen}
            />
            <Stack.Screen
                name="TalkS_7Screen"
                component={TalkS_7Screen}
            />
            <Stack.Screen
                name="TalkS_8Screen"
                component={TalkS_8Screen}
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
                name="Talk2_2Screen"
                component={Talk2_2Screen}
            />
            <Stack.Screen
                name="Talk2_3Screen"
                component={Talk2_3Screen}
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
                name="RightCG2_1Screen"
                component={RightCG2_1Screen}
            />
            <Stack.Screen
                name="RightCG2_2Screen"
                component={RightCG2_2Screen}
            />
            <Stack.Screen
                name="WrongCG2Screen"
                component={WrongCG2Screen}
            />

            <Stack.Screen
                name="Talk3_1Screen"
                component={Talk3_1Screen}
            />
            <Stack.Screen
                name="Puzzle3Screen"
                component={Puzzle3Screen}
            />
            <Stack.Screen
                name="Option3Screen"
                component={Option3Screen}
            />
            <Stack.Screen
                name="RightCG3Screen"
                component={RightCG3Screen}
            />
            <Stack.Screen
                name="WrongCG3Screen"
                component={WrongCG3Screen}
            />

            <Stack.Screen
                name="Talk4_1Screen"
                component={Talk4_1Screen}
            />
            <Stack.Screen
                name="Talk4_2Screen"
                component={Talk4_2Screen}
            />
            <Stack.Screen
                name="Talk4_3Screen"
                component={Talk4_3Screen}
            />
            <Stack.Screen
                name="Talk4_4Screen"
                component={Talk4_4Screen}
            />
            <Stack.Screen
                name="Puzzle4Screen"
                component={Puzzle4Screen}
            />
            <Stack.Screen
                name="Option4Screen"
                component={Option4Screen}
            />
            <Stack.Screen
                name="RightCG4Screen"
                component={RightCG4Screen}
            />
            <Stack.Screen
                name="WrongCG4Screen"
                component={WrongCG4Screen}
            />

            <Stack.Screen
                name="TalkE_1Screen"
                component={TalkE_1Screen}
            />
            <Stack.Screen
                name="TalkE_2Screen"
                component={TalkE_2Screen}
            />
            <Stack.Screen
                name="TalkE_3Screen"
                component={TalkE_3Screen}
            />

        </Stack.Navigator>
    );
}

export default Navigation;