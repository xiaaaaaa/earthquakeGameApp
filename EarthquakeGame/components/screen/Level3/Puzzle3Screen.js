import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const Puzzle3Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>Puzzle3Screen</Text>
            <Pressable onPress={() => navigation.navigate('Option3Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>作答</Text>
            </Pressable>
        </View>

    );
}

export default Puzzle3Screen;