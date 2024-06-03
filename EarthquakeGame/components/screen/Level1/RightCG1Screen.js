import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';

const RightCG1Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Text>RightCG1Screen</Text>
        </View>

    );
}

export default RightCG1Screen;