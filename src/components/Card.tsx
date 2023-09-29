import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../constants/colors';
import { useSelector } from 'react-redux';
import { MyButton } from './MyButton';

export const Card = () => {
    const { userToken } = useSelector((state: any) => state.auth);

    const doSomething = () => {
        console.log('1');
        console.log('2');
    };
    return(
        <View style={styles.card}>
            <View style={styles.row}>
                <Image source={require('../../assets/memojis/1.png')} style={styles.img} resizeMode='contain'/>
                <Text style={styles.name}>{userToken}</Text>
            </View>
            <MyButton title={'Add Friend'} onPress={doSomething} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'snow',
        width: '85%',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.primary,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    }
})