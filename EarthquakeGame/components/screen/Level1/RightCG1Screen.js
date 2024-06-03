import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const RightCG1Screen = () => {
    const navigation = useNavigation();
    const Answer1 = useSelector(selectAnswer1);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>RightCG1Screen</Text>
            <Text>{Answer1}</Text>
            <Pressable onPress={() => navigation.navigate('Talk2_1Screen')}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>下一關</Text>
            </Pressable>
        </View>

    );
}

export default RightCG1Screen;