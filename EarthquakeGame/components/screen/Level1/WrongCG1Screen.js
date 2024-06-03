import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const WrongCG1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>WrongCG1Screen</Text>
        </View>

    );
}

export default WrongCG1Screen;