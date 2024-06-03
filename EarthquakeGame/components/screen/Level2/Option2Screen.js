import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer2 } from "../../redux/Slice";
import { correct2Counter, wrong2Counter } from "../../redux/Slice";

const Option2Screen = () => {
    const navigation = useNavigation();
    // Get states from store
    const Answer2 = useSelector(selectAnswer2);
    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Option2Screen</Text>
            <Pressable onPress={() => {navigation.navigate('RightCG2Screen'); dispatch(correct2Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項一</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項二</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項二</Text>
            </Pressable>
            <Pressable onPress={() => {navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter());}}>
                <Text style={{ height: 50, width: 200, backgroundColor: '#000', color: '#fff' }}>選項二</Text>
            </Pressable>
        </View>

    );
}

export default Option2Screen;