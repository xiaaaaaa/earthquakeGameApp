import React from "react";
import { StyleSheet, Pressable, View, Platform, Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack, Center } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Puzzle4Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('../../images/40p.png')}
            >
                <Pressable onPress={() => navigation.navigate('Option4Screen')}>
                    <Text style={styles.btn}>答案是！</Text>
                </Pressable>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    btn: { 
        marginTop:760,
        marginLeft:280,
        height: 50, 
        width: 100, 
        backgroundColor: '#FF8787', 
        color: '#fff', 
        fontSize:20,
        fontWeight:'bold',
       
        paddingLeft:15,
        paddingVertical:10,
        borderRadius:7,
        borderWidth:2,
        borderColor:'#fff',
        shadowColor:'#000',
        shadowOpacity: 0.2,
        elevation: 7,
    }
})


export default Puzzle4Screen;