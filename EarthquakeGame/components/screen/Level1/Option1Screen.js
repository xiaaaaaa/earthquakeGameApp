import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const Option1Screen = () => {
    const navigation = useNavigation();
    const Answer1 = useSelector(selectAnswer1);
    const dispatch = useDispatch();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/10o.png')}
            >
                <View style={{ flexDirection: 'column', margin: 'auto' ,marginBottom:280}}>
                    <Pressable onPress={() => { navigation.navigate('RightCG1Screen'); dispatch(correct1Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40 }}>選項一</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('WrongCG1Screen'); dispatch(wrong1Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40 }}>選項二</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('WrongCG1Screen'); dispatch(wrong1Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40 }}>選項二</Text>
                    </Pressable>
                </View>

            </ImageBackground>
        </View>

    );
}

export default Option1Screen;