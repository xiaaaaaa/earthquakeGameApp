import { StyleSheet, Pressable, View, Platform,Image, ImageBackground } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { Text, VStack, HStack } from '@gluestack-ui/themed';
import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from '@gluestack-ui/themed';


const Talk2_2Screen = () => {
    const navigation = useNavigation();

    return(
        <View>
            <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={require('../../images/201.png')}
            >
            <Text style={{color:'black',backgroundColor:'#B3B3B3'}}>Talk2_2Screen</Text>
            <Pressable onPress={() => navigation.navigate('Talk2_3Screen')}>
                <Text style={{height:50, width:200, backgroundColor:'#000', color:'#fff'}}>下一頁</Text>
            </Pressable>
            </ImageBackground>
        </View>

    );
}

export default Talk2_2Screen;