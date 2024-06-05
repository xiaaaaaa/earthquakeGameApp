import React from "react";
import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const WrongCG1_3Screen = () => {
    const navigation = useNavigation();
    
    return (
        <View>
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../../images/10w3.png')}
        >
            <Pressable onPress={() => navigation.navigate('Talk2_1Screen')}>
                <Text style={styles.detection}></Text>
            </Pressable>
        </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    detection: { 
        height:'60%', 
        width:'100%', 
        marginTop:'80%',
        backgroundColor:'transparent', 
        color:'#fff'
    }
})

export default WrongCG1_3Screen;