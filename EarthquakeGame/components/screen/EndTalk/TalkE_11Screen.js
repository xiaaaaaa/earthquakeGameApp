import React from "react";
import { StyleSheet, Pressable, View, Platform, } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer1, selectAnswer2, selectAnswer3, selectAnswer4} from "../../redux/Slice";
import { correct1Counter, wrong1Counter } from "../../redux/Slice";

const TalkE_11Screen = () => {
    const navigation = useNavigation();
    const Answer1 = useSelector(selectAnswer1);
    const Answer2 = useSelector(selectAnswer2);
    const Answer3 = useSelector(selectAnswer3);
    const Answer4 = useSelector(selectAnswer4);
    const dispatch = useDispatch();

    return(
        <View>
            <Text>TalkE_11Screen</Text>
            <Text>第一關{Answer1}</Text>
            <Text>第二關{Answer2}</Text>
            <Text>第三關{Answer3}</Text>
            <Text>第四關{Answer4}</Text>

            {Answer1 === 1 && Answer2 === 1 && Answer3 === 1 && Answer4 === 1 ? (
                <Text>所有答案都是正確的！</Text>
            ) : (Answer1 === 2 && Answer2 === 2 && Answer3 === 2 && Answer4 === 2) ? (
                <Text>所有答案都是錯誤的。</Text>
            ) : (Answer1 === 1 && Answer2 === 2 && Answer3 === 1 && Answer4 === 2) ? (
                <Text>第一關和第三關正確，第二關和第四關錯誤。</Text>
            ) : (Answer1 === 2 && Answer2 === 1 && Answer3 === 2 && Answer4 === 1) ? (
                <Text>第一關和第三關錯誤，第二關和第四關正確。</Text>
            ) : (Answer1 === 1 && Answer2 === 1 && Answer3 === 2 && Answer4 === 2) ? (
                <Text>前兩關正確，後兩關錯誤。</Text>
            ) : (Answer1 === 2 && Answer2 === 2 && Answer3 === 1 && Answer4 === 1) ? (
                <Text>前兩關錯誤，後兩關正確。</Text>
            ) : (
                <Text>答案尚未完成或組合未被識別。</Text>
            )}
            
            <Pressable onPress={() => navigation.navigate('TalkS_1Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>回首頁</Text>
            </Pressable>
        </View>

    );
}

export default TalkE_11Screen;