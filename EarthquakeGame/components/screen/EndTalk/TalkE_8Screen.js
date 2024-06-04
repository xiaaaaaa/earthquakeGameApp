import React from "react";
import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const TalkE_8Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../../images/E_8_1.png')}
            >
                <Pressable onPress={() => navigation.navigate('TalkE_9Screen')}>
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

export default TalkE_8Screen;