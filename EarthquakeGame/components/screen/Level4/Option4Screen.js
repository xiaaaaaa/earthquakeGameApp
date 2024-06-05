import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer4 } from "../../redux/Slice";
import { correct4Counter, wrong4Counter } from "../../redux/Slice";

const Option4Screen = () => {
    const navigation = useNavigation();
    const Answer4 = useSelector(selectAnswer4);
    const dispatch = useDispatch();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/40o.png')}
            >
                <View style={{ flexDirection: 'column', margin: 'auto' ,marginBottom:210}}>
                    <Pressable onPress={() => { navigation.navigate('WrongCG4Screen'); dispatch(wrong4Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: '#F6FCB0', color: 'transparent',marginBottom:50, borderWidth:0 }}>選項一</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('WrongCG4Screen'); dispatch(wrong4Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: '#F6FCB0', color: 'transparent',marginBottom:50, borderWidth:0  }}>選項二</Text>
                    </Pressable>

                    <Pressable onPress={() => { navigation.navigate('RightCG4Screen'); dispatch(correct4Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: '#F6FCB0', color: 'transparent',marginBottom:50, borderWidth:0  }}>選項二</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('WrongCG4Screen'); dispatch(wrong4Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: '#F6FCB0', color: 'transparent', borderWidth:0  }}>選項二</Text>
                    </Pressable>

                </View>

            </ImageBackground>
        </View>

    );
}

export default Option4Screen;