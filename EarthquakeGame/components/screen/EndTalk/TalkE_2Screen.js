import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const TalkE_2Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>TalkE_2Screen</Text>
            <Pressable onPress={() => navigation.navigate('TalkE_3Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>下一頁</Text>
            </Pressable>
        </View>

    );
}

export default TalkE_2Screen;