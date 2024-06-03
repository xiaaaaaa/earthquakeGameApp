import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const Option1Screen = () => {
    const navigation = useNavigation();
    // Get states from store
    const Answer1 = useSelector(selectAnswer1);
    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Option1Screen</Text>
            <Pressable onPress={() => { navigation.navigate('RightCG1Screen'); dispatch(correct1Counter()); }}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項一</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG1Screen'); dispatch(wrong1Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項二</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG1Screen'); dispatch(wrong1Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項三</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG1Screen'); dispatch(wrong1Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項四</Text>
            </Pressable>
            <Text>{Answer1}</Text>
        </View>

    );
}

export default Option1Screen;