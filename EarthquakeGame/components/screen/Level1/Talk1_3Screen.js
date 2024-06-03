import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Talk1_3Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Talk1_3Screen</Text>
            <Pressable onPress={() => navigation.navigate('Talk1_4Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>下一頁</Text>
            </Pressable>
        </View>

    );
}

export default Talk1_3Screen;