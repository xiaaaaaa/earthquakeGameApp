import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Talk4_1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Talk4_1Screen</Text>
            <Pressable onPress={() => navigation.navigate('Puzzle4Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>開始解謎</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('TalkE_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#999999', color:'#fff'}}>前往結尾</Text>
            </Pressable>
        </View>

    );
}

export default Talk4_1Screen;