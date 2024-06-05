import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer3 } from "../../redux/Slice";
import { correct3Counter, wrong3Counter } from "../../redux/Slice";

const Option3Screen = () => {
    const navigation = useNavigation();
    const Answer3 = useSelector(selectAnswer3);
    const dispatch = useDispatch();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/30o.png')}
            >
                <View style={{ flexDirection: 'column', margin:'auto',marginBottom:330}}>
                <Pressable onPress={() => { navigation.navigate('WrongCG3Screen'); dispatch(wrong3Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40, borderWidth:0 }}>選項一</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('RightCG3Screen'); dispatch(correct3Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40, borderWidth:0  }}>選項二</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate('WrongCG3Screen'); dispatch(wrong3Counter()); }}>
                        <Text style={{ height: 90, width: 280, backgroundColor: 'transparent', color: 'transparent',marginBottom:40, borderWidth:0  }}>選項二</Text>
                    </Pressable>
                </View>

            </ImageBackground>
        </View>

    );
}

export default Option3Screen;