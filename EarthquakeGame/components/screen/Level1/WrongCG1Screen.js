import React from "react";
import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1 } from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const WrongCG1Screen = () => {
    const navigation = useNavigation();
    // Get states from store
    const Answer1 = useSelector(selectAnswer1);
    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return(
        // <View>
        //     <Text>WrongCG1Screen</Text>
        //     <Text>{Answer1}</Text>
        //     <Pressable onPress={() => navigation.navigate('Talk2_1Screen')}>
        //         <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>下一關</Text>
        //     </Pressable>
        // </View>
        <View>
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../../images/10w1.png')}
        >
            <Pressable onPress={() => navigation.navigate('WrongCG1_2Screen')}>
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


export default WrongCG1Screen;