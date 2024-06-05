import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4 } from "../../redux/Slice";

const TalkE_8Screen = () => {
    const navigation = useNavigation();
    const Answer1 = useSelector(selectAnswer1);
    const Answer2 = useSelector(selectAnswer2);
    const Answer3 = useSelector(selectAnswer3);
    const Answer4 = useSelector(selectAnswer4);

    return (
        <View style={{ backgroundColor:'white' }}>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/E00.png')}
            >
                {Answer1 === 1 ? (
                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={require('../../images/E_01.png')}
                    />
                ) : (
                    <Image
                        style={{ width: '100%', height: '100%' }} />
                )}
                {Answer2 === 1 ? (
                    <Image
                        style={{width: 416, height: 900, marginTop: -903, marginLeft: 7 }}
                        source={require('../../images/E_02.png')}
                    />
                ) : (
                    <Image
                        style={{ width: 416, height: 900, marginTop: -903, marginLeft: 7 }} />
                )}
                {Answer3 === 1 ? (
                    <Pressable onPress={() => navigation.navigate('TalkE_9Screen')}>
                        <Image
                            style={{  width: 424, height: 918.5, marginTop: -905, marginLeft: 0 }}
                            source={require('../../images/E03.png')} />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => navigation.navigate('TalkE_9Screen')}>
                        <Image
                            style={{  width: 424, height: 918.5, marginTop: -905, marginLeft: 0  }}
                            source={require('../../images/E_24.png')} />
                    </Pressable>
                )}
                <Pressable onPress={() => navigation.navigate('TalkE_9Screen')}>
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

export default TalkE_8Screen;