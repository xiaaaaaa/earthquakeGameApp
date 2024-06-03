import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const TalkE_3Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>TalkE_3Screen</Text>
            <Pressable onPress={() => navigation.navigate('TalkS_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>回首頁</Text>
            </Pressable>
        </View>

    );
}

export default TalkE_3Screen;