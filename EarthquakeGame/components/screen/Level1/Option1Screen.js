import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Option1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Option1Screen</Text>
            <Pressable onPress={() => navigation.navigate('RightCG1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>正確</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('WrongCG1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>錯誤</Text>
            </Pressable>
        </View>

    );
}

export default Option1Screen;