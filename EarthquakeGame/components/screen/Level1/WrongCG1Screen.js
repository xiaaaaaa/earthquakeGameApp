import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const WrongCG1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>WrongCG1Screen</Text>
            <Pressable onPress={() => navigation.navigate('Talk2_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>下一關</Text>
            </Pressable>
        </View>

    );
}

export default WrongCG1Screen;