import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";


const TalkE_4Screen = () => {
    const navigation = useNavigation();

    const Answer1 = useSelector(selectAnswer1);
    const Answer2 = useSelector(selectAnswer2);
    const Answer3 = useSelector(selectAnswer3);
    const Answer4 = useSelector(selectAnswer4);
    const dispatch = useDispatch();


    return (
        <View style={{ backgroundColor:'white' }}>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/E00.png')}
            >

                {Answer1 === 1 ? (
                    <Pressable onPress={() => navigation.navigate('TalkE_5Screen')}>
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../images/E01.png')}
                    />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => navigation.navigate('TalkE_5Screen')}>
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../../images/E_22.png')} />
                    </Pressable>
                )}
                <Pressable onPress={() => navigation.navigate('TalkE_5Screen')}>
                    <Text style={styles.detection}></Text>
                </Pressable>
            </ImageBackground>
        </View>

    );
}


const styles = StyleSheet.create({
    detection: {
        height: '60%',
        width: '100%',
        marginTop: '80%',
        backgroundColor: 'transparent',
        color: '#fff'
    }
})

export default TalkE_4Screen;