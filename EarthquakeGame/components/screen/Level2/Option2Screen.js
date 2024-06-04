import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer2 } from "../../redux/Slice";
import { correct2Counter, wrong2Counter } from "../../redux/Slice";

const Option2Screen = () => {
    const navigation = useNavigation();
    const Answer2 = useSelector(selectAnswer2);
    const dispatch = useDispatch();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/20o.png')}
            >
                <View style={{ flexDirection: 'column', margin:'auto',marginBottom:350}}>
                    <View style={{ flexDirection: 'row',marginBottom:40 }}>
                        <Pressable onPress={() => { navigation.navigate('RightCG2_1Screen'); dispatch(correct2Counter()); }}>
                            <Text style={{ height: 140, width: 130, backgroundColor: 'transparent', color: 'transparent',marginRight:30 }}>選項一</Text>
                        </Pressable>
                        <Pressable onPress={() => { navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter()); }}>
                            <Text style={{ height: 140, width: 130, backgroundColor: 'transparent', color: 'transparent' }}>選項二</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={() => { navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter()); }}>
                            <Text style={{ height: 140, width: 130, backgroundColor: 'transparent', color: 'transparent', marginRight:30}}>選項二</Text>
                        </Pressable>
                        <Pressable onPress={() => { navigation.navigate('WrongCG2Screen'); dispatch(wrong2Counter()); }}>
                            <Text style={{ height: 140, width: 130, backgroundColor: 'transparent', color: 'transparent' }}>選項二</Text>
                        </Pressable>
                    </View>
                </View>

            </ImageBackground>
        </View>

    );
}

export default Option2Screen;