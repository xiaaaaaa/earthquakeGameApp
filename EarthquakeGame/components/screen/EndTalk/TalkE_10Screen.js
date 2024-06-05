import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4 } from "../../redux/Slice";

const TalkE_10Screen = () => {
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
                        style={{ width: 390, height: 844, marginTop: -811, marginLeft: 2 }}
                        source={require('../../images/E_02.png')}
                    />
                ) : (
                    <Image
                        style={{ width: 390, height: 844, marginTop: -811, marginLeft: 2 }} />
                )}
                {Answer3 === 1 ? (
                    <Image
                        style={{ width: 390, height: 844, marginTop: -843, marginLeft: 1 }}
                        source={require('../../images/E_03.png')} />
                ) : (
                    <Image
                        style={{ width: 390, height: 844, marginTop: -843, marginLeft: 1 }} />
                )}
                {Answer4 === 1 ? (
                    <Pressable onPress={() => navigation.navigate('TalkE_11Screen')}>
                        <Image
                            style={{ width: 390, height: 844, marginTop: -844, marginLeft: 2 }}
                            source={require('../../images/E04.png')} />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => navigation.navigate('TalkE_11Screen')}>
                        <Image
                            style={{ width: 390, height: 844, marginTop: -844, marginLeft: 2 }}
                            source={require('../../images/E_22.png')} />
                    </Pressable>
                )}
                <Pressable onPress={() => navigation.navigate('TalkE_11Screen')}>
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

export default TalkE_10Screen;