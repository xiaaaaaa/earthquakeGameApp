import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, VStack, HStack, Center } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const CoverScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/cover.png')}
            >
                <Pressable onPress={() => navigation.navigate('TalkS_1Screen')}>
                    <Center>
                        <Text style={styles.btn}>START</Text>
                    </Center>
                </Pressable>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    btn: { 
        marginTop:650,
        height: 80, 
        width: 210, 
        backgroundColor: '#FF8787', 
        color: '#fff', 
        fontSize:48,
        fontWeight:'bold',
        paddingHorizontal:37,
        paddingVertical:10,
        borderRadius:20,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        elevation: 7,
    }
})


export default CoverScreen;