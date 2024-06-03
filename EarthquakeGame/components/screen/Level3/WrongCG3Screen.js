import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const WrongCG3Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>WrongCG3Screen</Text>
            <Pressable onPress={() => navigation.navigate('Talk4_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>前往第四關</Text>
            </Pressable>
        </View>

    );
}

export default WrongCG3Screen;