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
            
            
        </Stack.Navigator>
    );
}

export default Navigation;