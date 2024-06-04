import React from "react";
import { StyleSheet, Pressable, View, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer2 } from "../../redux/Slice";
import { correct2Counter, wrong2Counter } from "../../redux/Slice";

const RightCG2_2Screen = () => {
    const navigation = useNavigation();
    const Answer2 = useSelector(selectAnswer2);
    const dispatch = useDispatch();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/20r2.png')}
            >
                <Pressable onPress={() => navigation.navigate('Talk3_1Screen')}>
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
export default RightCG2_2Screen;