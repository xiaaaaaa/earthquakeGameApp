import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Puzzle1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Puzzle1Screen</Text>
            <Pressable onPress={() => navigation.navigate('Option1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>作答</Text>
            </Pressable>
        </View>

    );
}

export default Puzzle1Screen;