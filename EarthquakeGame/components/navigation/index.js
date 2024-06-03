import React, {useState} from "react";
import { StyleSheet, Keyboard, View} from "react-native";
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

// 第三關

// 第四關

// 結束對話

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return(
        <NativeBaseProvider>
            <NavigationContainer independent={true} >
                <HomeStack  />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

const HomeStack = ({navigation}) => {
    return(
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
            
            
        </Stack.Navigator>
    );
}

export default Navigation;