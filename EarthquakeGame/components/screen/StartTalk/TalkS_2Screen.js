import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const TalkS_2Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>TalkS_2Screen</Text>
            <Pressable onPress={() => navigation.navigate('Talk1_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>開始第一關</Text>
            </Pressable>
        </View>
    );
}

export default TalkS_2Screen;