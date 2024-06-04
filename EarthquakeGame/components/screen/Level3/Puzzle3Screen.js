import React from "react";
import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Puzzle3Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require('../../images/30p.png')}
            >
                <Pressable onPress={() => navigation.navigate('Option3Screen')}>
                    <Text style={styles.btn}>答案是！</Text>
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
    },
    btn: { 
        marginTop:820,
        marginLeft:290,
        height: 50, 
        width: 100, 
        backgroundColor: '#FF8787', 
        color: '#fff', 
        fontSize:20,
        fontWeight:'bold',
       
        paddingLeft:16,
        paddingVertical:12,
        borderRadius:7,
        borderWidth:2,
        borderColor:'#fff',
        shadowColor:'#000',
        shadowOpacity: 0.2,
        elevation: 7,
    }
})


export default Puzzle3Screen;