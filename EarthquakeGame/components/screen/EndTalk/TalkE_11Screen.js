import React from "react";
import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4} from "../../redux/Slice";

const TalkE_11Screen = () => {
    const navigation = useNavigation();
    const Answer1 = useSelector(selectAnswer1);
    const Answer2 = useSelector(selectAnswer2);
    const Answer3 = useSelector(selectAnswer3);
    const Answer4 = useSelector(selectAnswer4);

    return(
        <View>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../../images/E_11.png')}
            >
                {Answer1 === 1 ? (
                    <Image/>
                ) : (
                    <Image/>
                )}
                {Answer2 === 1 ? (
                    <Image/>
                ) : (
                    <Image/>
                )}
                {Answer3 === 1 ? (
                    <Image/>
                ) : (
                    <Image/>
                )}
                {Answer4 === 1 ? (
                    <Image/>
                ) : (
                    <Image/>
                )}
                <Pressable onPress={() => navigation.navigate('CoverScreen')}>
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

export default TalkE_11Screen;