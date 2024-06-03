import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Talk3_1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Talk3_1Screen</Text>
            <Pressable onPress={() => navigation.navigate('Puzzle3Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>開始解謎</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Talk4_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#999999', color:'#fff'}}>去第四關</Text>
            </Pressable>
        </View>

    );
}

export default Talk3_1Screen;