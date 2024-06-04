import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer2 } from "../../redux/Slice";
import { correct2Counter, wrong2Counter } from "../../redux/Slice";

const RightCG2_1Screen = () => {
    const navigation = useNavigation();
    const Answer2 = useSelector(selectAnswer2);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>RightCG2_1Screen</Text>
            <Text>{Answer2}</Text>
            <Pressable onPress={() => navigation.navigate('RightCG2_2Screen')}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>下一頁</Text>
            </Pressable>
        </View>

    );
}

export default RightCG2_1Screen;